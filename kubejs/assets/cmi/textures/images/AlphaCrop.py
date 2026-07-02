from pathlib import Path
from PIL import Image

# 将"in.png"的透明区域裁剪掉, 只剩下不透明的区域, 保存为"out.png"
# 将"in.png"放在当前脚本同目录下, 运行脚本后会生成"out.png"
def crop_transparent(image_path: str | Path, output_path: str | Path) -> None:
    img = Image.open(image_path).convert("RGBA")

    alpha = img.getchannel("A")
    bbox = alpha.getbbox()

    if bbox:
        img.crop(bbox).save(output_path)
        print(f"已保存:{output_path}")
    else:
        print("图片全透明,跳过")

current_dir = Path(__file__).parent

input_file = current_dir / "in.png"
output_file = current_dir / "out.png"

if not input_file.exists():
    print("当前目录下未找到 in.png")
else:
    crop_transparent(input_file, output_file)