#!/usr/bin/env python3
"""Generate the authored vector storyboards for 03_VISUAL_PLAN.md (Visual 1.0).

Each scene is one 1920x1080 SVG. Every beat is a top-level <g class="beat">
with data-beat="0" for the entry state and 1..n for cue-linked reveals.
Showing beats 0..k gives the settled endpoint of beat k. Geometry and tokens
follow 02_DESIGN_SYSTEM.md Design 1.0. All shapes are authored illustrations,
not product screenshots or measured data.

Usage: python3 tools/visual/build_storyboards.py   (writes assets/visual/S01.svg ... S12.svg)
"""
import math
import os

ROOT = os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
OUT = os.path.join(ROOT, "assets", "visual")

BG, SURFACE, FG = "#071923", "#102E38", "#F3F7F6"
MINT, AMBER, MUTED, LINE = "#6DE3C0", "#F4BF75", "#A7C0C8", "#73929C"

FONT_FACES = """
@font-face{font-family:"Noto Sans";font-weight:400;src:url(../fonts/NotoSans-Regular.woff2) format("woff2")}
@font-face{font-family:"Noto Sans";font-weight:500;src:url(../fonts/NotoSans-Medium.woff2) format("woff2")}
@font-face{font-family:"Noto Sans";font-weight:600;src:url(../fonts/NotoSans-SemiBold.woff2) format("woff2")}
text{font-family:"Noto Sans",sans-serif;font-kerning:normal;font-variant-numeric:tabular-nums}
"""


def f(v):
    return f"{v:g}"


def text(x, y, s, size=48, weight=500, fill=FG, anchor="start", role="label", block=None):
    block_attr = f' data-block="{block}"' if block else ""
    return (f'<text x="{f(x)}" y="{f(y)}" font-size="{size}" font-weight="{weight}" '
            f'fill="{fill}" text-anchor="{anchor}" data-role="{role}"{block_attr}>{s}</text>')


def arrow(d, end, angle_deg, color=LINE, sw=4, dash=None):
    """Explanatory content arrow: open path plus a small plain filled head at `end`."""
    a = math.radians(angle_deg)
    L, W = 22, 11
    bx, by = end[0] - L * math.cos(a), end[1] - L * math.sin(a)
    p1 = (bx + W * math.sin(a), by - W * math.cos(a))
    p2 = (bx - W * math.sin(a), by + W * math.cos(a))
    dash_attr = f' stroke-dasharray="{dash}"' if dash else ""
    return (f'<g data-role="arrow"><path d="{d}" fill="none" stroke="{color}" stroke-width="{sw}" '
            f'stroke-linecap="round" stroke-linejoin="round"{dash_attr}/>'
            f'<path d="M{f(end[0])},{f(end[1])} L{f(p1[0])},{f(p1[1])} L{f(p2[0])},{f(p2[1])} Z" '
            f'fill="{color}" stroke="{color}" stroke-width="2" stroke-linejoin="round"/></g>')


def line(x1, y1, x2, y2, color=LINE, sw=4, dash=None):
    dash_attr = f' stroke-dasharray="{dash}"' if dash else ""
    return (f'<line x1="{f(x1)}" y1="{f(y1)}" x2="{f(x2)}" y2="{f(y2)}" stroke="{color}" '
            f'stroke-width="{sw}" stroke-linecap="round"{dash_attr}/>')


def doc(x, y, w=180, h=232, stroke=FG, sw=4, bars=3, draft=False, check=False, fill=SURFACE):
    """Work object: sheet with folded corner and non-text content bars."""
    fold = w * 0.22
    out = [f'<g data-role="work-object">',
           f'<path d="M{f(x)},{f(y)} H{f(x + w - fold)} L{f(x + w)},{f(y + fold)} V{f(y + h)} H{f(x)} Z" '
           f'fill="{fill}" stroke="{stroke}" stroke-width="{sw}" stroke-linejoin="round"/>',
           f'<path d="M{f(x + w - fold)},{f(y)} V{f(y + fold)} H{f(x + w)}" fill="none" '
           f'stroke="{stroke}" stroke-width="{sw}" stroke-linejoin="round"/>']
    for i in range(bars):
        by = y + h * 0.36 + i * h * 0.17
        bw = w * (0.62 if i < bars - 1 else 0.40)
        out.append(line(x + w * 0.18, by, x + w * 0.18 + bw, by, MUTED, 6, "14 12" if draft else None))
    if check:
        cx, cy, r = x + w, y + h, 38
        out.append(f'<circle cx="{f(cx)}" cy="{f(cy)}" r="{r}" fill="{BG}" stroke="{MINT}" stroke-width="6"/>')
        out.append(f'<path d="M{f(cx - 16)},{f(cy + 1)} L{f(cx - 4)},{f(cy + 13)} L{f(cx + 18)},{f(cy - 12)}" '
                   f'fill="none" stroke="{MINT}" stroke-width="6" stroke-linecap="round" stroke-linejoin="round"/>')
    out.append("</g>")
    return "".join(out)


def enclosure(x, y, w, h, stroke=LINE, sw=4, rx=28, fill=SURFACE, dash=None):
    dash_attr = f' stroke-dasharray="{dash}"' if dash else ""
    return (f'<rect data-role="enclosure" x="{f(x)}" y="{f(y)}" width="{f(w)}" height="{f(h)}" rx="{rx}" '
            f'fill="{fill}" stroke="{stroke}" stroke-width="{sw}"{dash_attr}/>')


def person(cx, cy, color=AMBER, sw=6):
    """Human reviewer silhouette (head + shoulders); amber = human authority."""
    return (f'<g data-role="reviewer"><circle cx="{f(cx)}" cy="{f(cy - 34)}" r="24" fill="none" stroke="{color}" stroke-width="{sw}"/>'
            f'<path d="M{f(cx - 46)},{f(cy + 46)} C{f(cx - 46)},{f(cy + 6)} {f(cx - 24)},{f(cy)} {f(cx)},{f(cy)} '
            f'C{f(cx + 24)},{f(cy)} {f(cx + 46)},{f(cy + 6)} {f(cx + 46)},{f(cy + 46)}" fill="none" '
            f'stroke="{color}" stroke-width="{sw}" stroke-linecap="round"/></g>')


def gate(x, y1, y2, gap_top, gap_bot, color=AMBER, sw=6):
    """Permission boundary: amber vertical line broken by one gate opening with posts."""
    return (f'<g data-role="gate">{line(x, y1, x, gap_top, color, sw)}{line(x, gap_bot, x, y2, color, sw)}'
            f'{line(x - 22, gap_top, x + 22, gap_top, color, sw)}{line(x - 22, gap_bot, x + 22, gap_bot, color, sw)}</g>')


def criterion(x, y, color=AMBER, size=40):
    """Check criterion: small square with tick (a criterion, not a UI checkbox control)."""
    return (f'<g data-role="criterion"><rect x="{f(x)}" y="{f(y)}" width="{size}" height="{size}" rx="6" fill="none" '
            f'stroke="{color}" stroke-width="4"/><path d="M{f(x + 9)},{f(y + 21)} L{f(x + 17)},{f(y + 29)} '
            f'L{f(x + 31)},{f(y + 11)}" fill="none" stroke="{color}" stroke-width="4" stroke-linecap="round" '
            f'stroke-linejoin="round"/></g>')


def beat(scene, n, body):
    return f'<g id="{scene}-b{n}" class="beat" data-beat="{n}">{body}</g>'


def svg(scene, desc, beats):
    return (f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 1080" width="1920" height="1080" '
            f'data-scene="{scene}" role="img" aria-labelledby="{scene}-desc">'
            f'<desc id="{scene}-desc">{desc}</desc><style>{FONT_FACES}</style>'
            f'<rect data-role="background" x="0" y="0" width="1920" height="1080" fill="{BG}"/>'
            + "".join(beat(scene, i, b) for i, b in enumerate(beats)) + "</svg>\n")


SCENES = {}

# S01 — cover: answer box gives way to work that must reach a usable result (question left open: no check).
SCENES["S01"] = ("ปก: กล่องคำตอบหนึ่งกล่อง แล้วงานเดินต่อไปเป็นผลงานหนึ่งชิ้น คำถามคือไปถึงจุดที่ใช้ได้จริงหรือไม่", [
    text(144, 250, "From answers", 96, 500, role="title", block="cover-title")
    + text(144, 365, "to responsibility", 96, 500, role="title", block="cover-title")
    + f'<g data-role="answer-box"><path d="M600,560 H940 Q964,560 964,584 V756 Q964,780 940,780 H716 L668,828 L676,780 '
      f'H624 Q600,780 600,756 V584 Q600,560 624,560 Z" fill="{SURFACE}" stroke="{LINE}" stroke-width="4" stroke-linejoin="round"/>'
    + line(648, 628, 900, 628, MUTED, 6) + line(648, 676, 900, 676, MUTED, 6) + line(648, 724, 800, 724, MUTED, 6) + "</g>",
    arrow("M996,670 H1164", (1188, 670), 0)
    + doc(1256, 530, 180, 232, LINE, 4, 0, fill=BG)
    + doc(1236, 550, 180, 232, LINE, 4, 0, fill=BG)
    + doc(1216, 570, 200, 256, MINT, 6, 3, draft=False),
])

# S02 — goal, action, and one returning feedback path to the decision point.
SCENES["S02"] = ("เป้าหมายไปสู่จุดตัดสินใจของ Agent แล้วไปสู่การใช้เครื่องมือ ผลที่ได้ย้อนกลับมาที่จุดตัดสินใจหนึ่งครั้งแล้วหยุด", [
    '<g data-role="goal">'
    + f'<circle cx="520" cy="500" r="84" fill="{SURFACE}" stroke="{FG}" stroke-width="4"/>'
    + f'<circle cx="520" cy="500" r="50" fill="none" stroke="{FG}" stroke-width="4"/>'
    + f'<circle cx="520" cy="500" r="16" fill="{FG}"/></g>'
    + text(520, 372, "Goal", anchor="middle")
    + arrow("M628,500 H792", (816, 500), 0)
    + f'<path data-role="decision" d="M960,380 L1080,500 L960,620 L840,500 Z" fill="{SURFACE}" stroke="{MINT}" stroke-width="6" stroke-linejoin="round"/>'
    + arrow("M1104,500 H1276", (1300, 500), 0)
    + f'<g data-role="tool"><rect x="1320" y="420" width="160" height="160" rx="22" fill="{SURFACE}" stroke="{FG}" stroke-width="4"/>'
    + f'<rect x="1356" y="456" width="38" height="38" rx="6" fill="none" stroke="{MUTED}" stroke-width="4"/>'
    + f'<rect x="1406" y="456" width="38" height="38" rx="6" fill="none" stroke="{MUTED}" stroke-width="4"/>'
    + f'<rect x="1356" y="506" width="38" height="38" rx="6" fill="none" stroke="{MUTED}" stroke-width="4"/>'
    + f'<rect x="1406" y="506" width="38" height="38" rx="6" fill="none" stroke="{MUTED}" stroke-width="4"/></g>'
    + text(1400, 372, "Action", anchor="middle"),
    arrow("M1400,604 V760 Q1400,800 1360,800 H1000 Q960,800 960,760 V670", (960, 646), -90)
    + text(1180, 880, "Feedback", anchor="middle"),
])

# S03 — bounded cloud workspace; context documents, then a draft that continues.
SCENES["S03"] = ("พื้นที่ทำงานบนคลาวด์ที่มีขอบเขต เอกสารบริบทเข้ามาอยู่ในพื้นที่ แล้วร่างผลงานเดินต่อ ไม่ได้หมายถึงการประมวลผลหรือสิทธิ์ไม่จำกัด", [
    text(480, 250, "Dots", 88, 500, role="heading")
    + enclosure(480, 320, 960, 600)
    + f'<path data-role="cloud-glyph" d="M1316,404 H1380 A26,26 0 0 0 1376,352 A36,36 0 0 0 1310,340 '
      f'A28,28 0 0 0 1290,378 A14,14 0 0 0 1316,404 Z" fill="none" stroke="{LINE}" stroke-width="4" stroke-linejoin="round"/>',
    doc(600, 470, 170, 220, FG, 4, 3) + doc(640, 510, 170, 220, FG, 4, 3),
    arrow("M850,620 H1000", (1024, 620), 0)
    + doc(1060, 480, 200, 256, MINT, 6, 3, draft=True)
    + text(1160, 850, "Ongoing work", anchor="middle"),
])

# S04 — model core; harness + state; tools; one supported event enters.
SCENES["S04"] = ("แกนโมเดลอยู่กลาง harness ล้อมรอบและเชื่อมกับ state แล้วเชื่อมกับ tools จากนั้น event หนึ่งรายการจากแอปที่รองรับเข้ามาหนึ่งครั้ง", [
    f'<circle data-role="model" cx="960" cy="580" r="124" fill="{SURFACE}" stroke="{MINT}" stroke-width="6"/>'
    + text(960, 597, "Model", anchor="middle"),
    f'<circle data-role="harness" cx="960" cy="580" r="236" fill="none" stroke="{FG}" stroke-width="4"/>'
    + text(960, 300, "Harness", anchor="middle")
    + line(1196, 580, 1276, 580)
    + f'<g data-role="state"><rect x="1276" y="500" width="160" height="160" rx="20" fill="{SURFACE}" stroke="{FG}" stroke-width="4"/>'
    + line(1310, 548, 1402, 548, MUTED, 6) + line(1310, 580, 1402, 580, MUTED, 6) + line(1310, 612, 1370, 612, MUTED, 6) + "</g>"
    + text(1356, 744, "State", anchor="middle"),
    line(724, 580, 644, 580)
    + f'<g data-role="tools"><rect x="484" y="500" width="160" height="160" rx="20" fill="{SURFACE}" stroke="{FG}" stroke-width="4"/>'
    + f'<rect x="520" y="536" width="38" height="38" rx="6" fill="none" stroke="{MUTED}" stroke-width="4"/>'
    + f'<rect x="570" y="536" width="38" height="38" rx="6" fill="none" stroke="{MUTED}" stroke-width="4"/>'
    + f'<rect x="520" y="586" width="38" height="38" rx="6" fill="none" stroke="{MUTED}" stroke-width="4"/>'
    + f'<rect x="570" y="586" width="38" height="38" rx="6" fill="none" stroke="{MUTED}" stroke-width="4"/></g>'
    + text(564, 744, "Tools", anchor="middle"),
    f'<g data-role="app-source"><rect x="1496" y="236" width="112" height="112" rx="20" fill="{SURFACE}" stroke="{LINE}" stroke-width="4"/>'
    + f'<circle cx="1552" cy="292" r="14" fill="{MINT}"/></g>'
    + arrow("M1488,320 Q1320,360 1150,436", (1130, 446), 154),
])

# S05 — two equal categorical provider routes into one managed-execution boundary.
SCENES["S05"] = ("เส้นทางผู้ให้บริการหนึ่งเส้นไปสู่ขอบเขตการทำงานแบบ managed แล้วมีอีกเส้นทางขนาดเท่ากัน ไม่ใช่อันดับหรือส่วนแบ่งตลาด", [
    f'<circle data-role="provider" cx="560" cy="440" r="64" fill="{SURFACE}" stroke="{FG}" stroke-width="4"/>'
    + arrow("M640,440 C860,440 940,500 1144,500", (1168, 500), 0)
    + enclosure(1192, 380, 420, 400)
    + doc(1310, 450, 190, 244, MINT, 6, 3, draft=True),
    text(144, 220, "A wider industry shift", 88, 500, role="heading")
    + f'<circle data-role="provider" cx="560" cy="720" r="64" fill="{SURFACE}" stroke="{FG}" stroke-width="4"/>'
    + arrow("M640,720 C860,720 940,660 1144,660", (1168, 660), 0),
])

# S06 — exact-value typesetting; layout input / cached input / output, reveal input, output, cached input.
COLS = {"input": 480, "cached": 960, "output": 1440}
def rate(key, label, value):
    cx = COLS[key]
    return (f'<g data-role="rate" data-rate="{key}">'
            + text(cx, 500, label, 48, 500, FG, "middle", role="essential-label")
            + text(cx, 700, value, 144, 600, FG, "middle", role="essential-value") + "</g>")
SCENES["S06"] = ("ราคา token มาตรฐานของ GPT-6.1 Sol หน่วยดอลลาร์สหรัฐต่อหนึ่งล้าน tokens: input 2 ดอลลาร์ output 10 ดอลลาร์ cached input 0.10 ดอลลาร์ ขนาดเท่ากัน ไม่ใช่ต้นทุนต่องาน", [
    text(144, 220, "Token price", 88, 500, role="heading")
    + line(720, 430, 720, 760) + line(1200, 430, 1200, 760)
    + text(960, 880, "USD per 1M tokens", 48, 500, MUTED, "middle", role="essential-unit"),
    rate("input", "Input", "$2"),
    rate("output", "Output", "$10"),
    rate("cached", "Cached input", "$0.10"),
])

# S07 — unscaled cost ingredients (equal slots) produce one accepted outcome; review/rework joins at its cue.
def slot(x, inner):
    return f'<g data-role="cost-ingredient">{enclosure(x, 520, 150, 150, LINE, 4, 20)}{inner}</g>'
SCENES["S07"] = ("ส่วนประกอบต้นทุนขนาดเท่ากันไม่มีสเกล: โมเดล เครื่องมือ คอมพิวเตอร์ แล้วเพิ่มเวลาคนตรวจและแก้ ทั้งหมดไปสู่ผลงานที่ยอมรับได้หนึ่งชิ้น", [
    text(144, 220, "Cost per accepted outcome", 88, 500, role="heading")
    + enclosure(216, 470, 820, 250, LINE, 4, 32, fill="none")
    + slot(256, f'<circle cx="331" cy="595" r="36" fill="none" stroke="{MINT}" stroke-width="6"/>'
                f'<circle cx="331" cy="595" r="10" fill="{MINT}"/>')
    + slot(446, f'<rect x="481" y="560" width="30" height="30" rx="5" fill="none" stroke="{FG}" stroke-width="4"/>'
                f'<rect x="531" y="560" width="30" height="30" rx="5" fill="none" stroke="{FG}" stroke-width="4"/>'
                f'<rect x="481" y="600" width="30" height="30" rx="5" fill="none" stroke="{FG}" stroke-width="4"/>'
                f'<rect x="531" y="600" width="30" height="30" rx="5" fill="none" stroke="{FG}" stroke-width="4"/>')
    + slot(636, f'<rect x="666" y="560" width="90" height="58" rx="8" fill="none" stroke="{FG}" stroke-width="4"/>'
                + line(711, 618, 711, 640, FG, 4) + line(685, 642, 737, 642, FG, 4))
    + arrow("M1060,595 H1296", (1320, 595), 0)
    + doc(1360, 470, 200, 256, MINT, 6, 3, check=True),
    f'<g data-role="cost-ingredient" data-ingredient="review-rework">{enclosure(826, 520, 150, 150, AMBER, 6, 20)}{person(901, 610)}</g>',
])

# S08 — read and draft stay on the agent side; the approval gate appears before the write arrow.
SCENES["S08"] = ("อ่านข้อมูลและสร้างร่างอยู่ฝั่ง Agent ประตูอนุมัติของคนปรากฏก่อน แล้วเส้นเขียนข้อมูลจริงจึงผ่านประตูไปยังระบบ", [
    doc(400, 440, 170, 220, FG, 4, 3) + text(485, 750, "Read", anchor="middle")
    + arrow("M594,550 H676", (700, 550), 0)
    + doc(720, 440, 180, 232, MINT, 6, 3, draft=True) + text(810, 750, "Draft", anchor="middle")
    + f'<g data-role="record-system"><ellipse cx="1400" cy="470" rx="130" ry="38" fill="{SURFACE}" stroke="{FG}" stroke-width="4"/>'
    + f'<path d="M1270,470 V630 A130,38 0 0 0 1530,630 V470" fill="{SURFACE}" stroke="{FG}" stroke-width="4"/>'
    + f'<path d="M1270,550 A130,38 0 0 0 1530,550" fill="none" stroke="{FG}" stroke-width="4"/></g>'
    + text(1400, 750, "Write", anchor="middle"),
    gate(1100, 300, 820, 500, 600)
    + person(1100, 240)
    + text(1100, 900, "Approve", anchor="middle")
    + arrow("M928,550 H1234", (1258, 550), 0, MINT, 4),
])

# S09 — hypothetical maintenance example: interface, persistent records, then rules at the records boundary.
SCENES["S09"] = ("ตัวอย่างสมมติงานซ่อมบำรุง: interface ที่คนสั่งงานอยู่แยกจากระบบ records ร่างรายการงานต้องผ่านเกณฑ์ตรวจก่อนบันทึกจริง records ยังคงอยู่", [
    enclosure(320, 340, 400, 460, LINE, 4)
    + f'<path data-role="command-bubble" d="M384,400 H656 Q672,400 672,416 V500 Q672,516 656,516 H450 L420,548 L424,516 H384 '
      f'Q368,516 368,500 V416 Q368,400 384,400 Z" fill="none" stroke="{FG}" stroke-width="4" stroke-linejoin="round"/>'
    + line(404, 458, 620, 458, MUTED, 6)
    + doc(456, 580, 130, 160, MINT, 6, 2, draft=True)
    + text(520, 880, "Interface", anchor="middle"),
    enclosure(1200, 340, 400, 460, FG, 4)
    + "".join(f'<rect data-role="record-row" x="1244" y="{y}" width="312" height="56" rx="10" fill="none" stroke="{MUTED}" stroke-width="4"/>'
              for y in (400, 490, 580, 670))
    + text(1400, 880, "Records", anchor="middle"),
    gate(1140, 340, 800, 610, 710)
    + criterion(1066, 380) + criterion(1066, 450) + criterion(1066, 520)
    + text(1140, 880, "Rules", anchor="middle")
    + arrow("M610,660 H1094", (1118, 660), 0, MINT, 4),
])

# S10 — a test task reaches an inspected accepted outcome; an unnumbered span marks elapsed time to done.
SCENES["S10"] = ("งานทดสอบหนึ่งชิ้นเดินไปจนเป็นผลงานที่ผ่านการตรวจ เส้นช่วงเวลาไม่มีตัวเลข หมายถึงวัดเวลาจนงานเสร็จจริง ไม่ใช่ผล speedup หรือ slowdown", [
    text(144, 220, "Measure real outcomes", 88, 500, role="heading")
    + doc(380, 440, 190, 244, FG, 4, 3, draft=True),
    arrow("M620,562 H1300", (1324, 562), 0)
    + doc(1360, 440, 200, 256, MINT, 6, 3, check=True)
    + f'<g data-role="elapsed-span">{line(475, 800, 1460, 800)}{line(475, 776, 475, 824)}{line(1460, 776, 1460, 824)}</g>',
])

# S11 — three equal conditional branches revealed in spoken order; equal node area and connector length.
ORIGIN = (520, 560)
R = 780
def branch(angle, label, y_label_offset=17):
    a = math.radians(angle)
    nx, ny = ORIGIN[0] + R * math.cos(a), ORIGIN[1] + R * math.sin(a)
    sx, sy = ORIGIN[0] + 40 * math.cos(a), ORIGIN[1] + 40 * math.sin(a)
    ex, ey = nx - 84 * math.cos(a), ny - 84 * math.sin(a)
    return (f'<g data-role="scenario-branch">'
            + arrow(f"M{sx:.1f},{sy:.1f} L{ex - 22 * math.cos(a):.1f},{ey - 22 * math.sin(a):.1f}", (ex, ey), angle)
            + f'<circle cx="{nx:.1f}" cy="{ny:.1f}" r="56" fill="{SURFACE}" stroke="{FG}" stroke-width="4"/>'
            + text(nx + 88, ny + y_label_offset, label) + "</g>")
SCENES["S11"] = ("สามแขนงเงื่อนไขขนาดเท่ากันจากจุดปัจจุบัน: Bounded, Broader, Constrained เปิดทีละทางตามคำบรรยาย ไม่มีความน่าจะเป็นหรือปี", [
    f'<circle data-role="origin" cx="{ORIGIN[0]}" cy="{ORIGIN[1]}" r="28" fill="{FG}"/>',
    branch(-19, "Bounded"),
    branch(0, "Broader"),
    branch(19, "Constrained"),
])

# S12 — one work object settles inside the criteria frame, inside the permission boundary. Terminal hold.
SCENES["S12"] = ("กรอบสิทธิ์ล้อมกรอบเกณฑ์สำเร็จ ผลงานหนึ่งชิ้นมาหยุดอยู่ภายในกรอบทั้งสอง ภาพสุดท้ายค้างไว้", [
    text(144, 220, "Delegate with boundaries", 88, 500, role="heading")
    + f'<rect data-role="permission-boundary" x="560" y="320" width="800" height="640" rx="36" fill="none" stroke="{AMBER}" stroke-width="6"/>'
    + f'<rect data-role="criteria-frame" x="680" y="400" width="560" height="480" rx="28" fill="{SURFACE}" stroke="{LINE}" stroke-width="4"/>'
    + criterion(720, 440, LINE) + criterion(720, 500, LINE) + criterion(720, 560, LINE),
    doc(880, 500, 180, 232, MINT, 6, 3, check=True),
])


def main():
    os.makedirs(OUT, exist_ok=True)
    for scene, (desc, beats) in SCENES.items():
        with open(os.path.join(OUT, f"{scene}.svg"), "w", encoding="utf-8") as fh:
            fh.write(svg(scene, desc, beats))
        print(scene, len(beats) - 1, "reveal beat(s)")


if __name__ == "__main__":
    main()
