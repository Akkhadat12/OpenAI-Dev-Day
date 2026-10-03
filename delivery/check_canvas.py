#!/usr/bin/env python3
"""Check painted scene copy against the visual-plan strings.

Reads the static HTML. Does not start a browser and does not award QA.
"""
from __future__ import annotations

import re
import sys
from html.parser import HTMLParser
from pathlib import Path

THAI = re.compile(r"[\u0e00-\u0e7f]")
WS = re.compile(r"\s+")

EXPECTED = {
    "S01": {
        0: "",
        1: "OpenAI DevDay 2025",
    },
    "S02": {
        0: "",
        1: "Software runs in chat",
    },
    "S03": {
        0: "Four pillars",
        1: "Four pillars Apps",
        2: "Four pillars Apps Agents",
        3: "Four pillars Apps Agents Codex",
        4: "Four pillars Apps Agents Codex Models API",
    },
    "S04": {
        0: "",
        1: "Apps SDK · Preview",
        2: "Apps SDK · Preview MCP",
    },
    "S05": {
        0: "Partner demos",
        1: "Partner demos Coursera",
        2: "Partner demos Coursera Canva",
        3: "Partner demos Coursera Canva Zillow",
        4: "Partner demos Coursera Canva Zillow",
    },
    "S06": {
        0: "AgentKit",
        1: "AgentKit",
    },
    "S07": {
        0: "Status matters",
        1: "Status matters Builder Beta",
        2: "Status matters Builder Beta ChatKit GA",
        3: "Status matters Builder Beta ChatKit GA Evals GA",
        4: "Status matters Builder Beta ChatKit GA Evals GA Guardrails",
        5: "Status matters Builder Beta ChatKit GA Evals GA Guardrails Connectors Limited beta",
    },
    "S08": {
        0: "",
        1: "Codex Preview",
        2: "Codex is GA",
        3: "Codex is GA Slack",
        4: "Codex is GA Slack SDK",
        5: "Codex is GA Slack SDK Admin",
        6: "Codex is GA Slack SDK Admin 10× OpenAI-reported",
    },
    "S09": {
        0: "API fuel",
        1: "API fuel GPT-5 Pro",
        2: "API fuel GPT-5 Pro Sora 2",
        3: "API fuel GPT-5 Pro Sora 2 mini −70% −80%",
    },
    "S10": {
        0: "Platform first",
        1: "Platform first Apps Preview",
        2: "Platform first Apps Preview Agents",
        3: "Platform first Apps Preview Agents Codex GA",
    },
}


class Text:
    def __init__(self, data: str) -> None:
        self.data = data


class Element:
    def __init__(self, tag: str, attrs: list[tuple[str, str | None]]) -> None:
        self.tag = tag
        self.attrs = {key: ("" if value is None else value) for key, value in attrs}
        self.children: list[Element | Text] = []


class Tree(HTMLParser):
    VOID = {"area", "base", "br", "col", "embed", "hr", "img", "input", "link", "meta", "source", "track", "wbr"}

    def __init__(self) -> None:
        super().__init__(convert_charrefs=True)
        self.root = Element("root", [])
        self.stack = [self.root]

    def handle_starttag(self, tag: str, attrs: list[tuple[str, str | None]]) -> None:
        node = Element(tag, attrs)
        self.stack[-1].children.append(node)
        if tag not in self.VOID:
            self.stack.append(node)

    def handle_startendtag(self, tag: str, attrs: list[tuple[str, str | None]]) -> None:
        self.stack[-1].children.append(Element(tag, attrs))

    def handle_endtag(self, tag: str) -> None:
        for index in range(len(self.stack) - 1, 0, -1):
            if self.stack[index].tag == tag:
                del self.stack[index:]
                return

    def handle_data(self, data: str) -> None:
        self.stack[-1].children.append(Text(data))


def shown(element: Element, beat: int) -> bool:
    if "hidden" in element.attrs:
        return False
    raw = element.attrs.get("data-beat")
    if raw is None:
        return True
    start = int(raw)
    until = int(element.attrs["data-until"]) if "data-until" in element.attrs else 10**9
    return start <= beat <= until


def collect(node: Element | Text, beat: int, visible: bool, parts: list[str]) -> None:
    if isinstance(node, Text):
        if visible and node.data.strip():
            parts.append(node.data.strip())
        return
    if node.tag in {"script", "style", "svg"}:
        return
    next_visible = visible and shown(node, beat)
    for child in node.children:
        collect(child, beat, next_visible, parts)


def normalize(parts: list[str]) -> str:
    return WS.sub(" ", " ".join(parts)).strip()


def main() -> int:
    root = Path(sys.argv[1] if len(sys.argv) > 1 else "src")
    html_path = root / "index.html"
    parser = Tree()
    parser.feed(html_path.read_text(encoding="utf-8"))
    stage = None

    def find_stage(node: Element) -> None:
        nonlocal stage
        if node.attrs.get("id") == "stage":
            stage = node
            return
        for child in node.children:
            if isinstance(child, Element):
                find_stage(child)

    find_stage(parser.root)
    if stage is None:
        print("stage missing")
        return 1

    scenes = [child for child in stage.children if isinstance(child, Element) and "scene" in child.attrs.get("class", "")]
    ids = [scene.attrs.get("data-scene") for scene in scenes]
    if ids != list(EXPECTED):
        print("scene ids", ids)
        return 1

    failed = False
    for scene in scenes:
        scene_id = scene.attrs["data-scene"]
        for beat, expected in EXPECTED[scene_id].items():
            parts: list[str] = []
            collect(scene, beat, True, parts)
            actual = normalize(parts)
            if actual != expected:
                print(f"{scene_id} beat {beat}\n  expected: {expected!r}\n  actual:   {actual!r}")
                failed = True
            if THAI.search(actual):
                print(f"Thai on canvas: {scene_id} beat {beat}")
                failed = True
            ordinary = {
                "S01": "OpenAI DevDay 2025" if beat else "",
                "S02": "Software runs in chat" if beat else "",
                "S03": "Four pillars",
                "S04": "Apps SDK · Preview" if beat else "",
                "S05": "Partner demos",
                "S06": "AgentKit",
                "S07": "Status matters",
                "S08": "" if beat == 0 else ("Codex" if beat == 1 else "Codex is GA"),
                "S09": "API fuel",
                "S10": "Platform first",
            }[scene_id]
            words = [word for word in ordinary.replace("·", " ").split() if word]
            if len(words) > 8:
                print(f"ordinary budget {scene_id} beat {beat}: {words}")
                failed = True

    runtime = "\n".join(path.read_text(encoding="utf-8") for path in (root / "index.html", root / "styles.css", root / "app.js", root / "scenes.js"))
    if re.search(r"""(?:src|href)\s*=\s*['"]https?://""", runtime) or re.search(r"url\(\s*['\"]?https?://", runtime):
        print("runtime external URL found")
        failed = True

    cover_dir = root / "assets" / "cover"
    if not cover_dir.exists():
        cover_dir = root.parent / "assets" / "cover"
    for name in ("openai-wordmark-2025.svg", "openai-blossom-2025.svg"):
        source = (cover_dir / name).read_text(encoding="utf-8")
        source_paths = re.findall(r'\sd="([^"]*)"', source)
        if not source_paths:
            print("missing paths", name)
            failed = True
            continue
        html = html_path.read_text(encoding="utf-8")
        for path_data in source_paths:
            if path_data not in html:
                print("inlined svg drifted", name)
                failed = True
                break

    if failed:
        return 1
    print(f"canvas copy ok: {html_path}")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
