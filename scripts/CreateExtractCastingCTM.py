from PIL import Image

# 这个Python文件可以将Create Mod格式的CTM纹理转换成CTM Mod格式的CTM纹理
def open_new(types: 'bool' = True) -> str:
    """
    说明:
        文件及目录读取
    参数说明:
        :param types: 布尔格式（bool），是否直接选择文件，默认值true
        :return: 字符串格式（str），目标路径或空字符串
	"""
    from tkinter import Tk, filedialog
    Tk().withdraw()

    t = "选择{}".format((lambda x: '文件' if x else '目录')(types))
    print('正在{}'.format(t), end='')
    url = (lambda x: filedialog.askopenfilename() if x else filedialog.askdirectory())(types)
    if url == '':
        raise Exception("选择已取消！")
    else:
        print('\r{}:{}'.format(t, url))
        return url

u = open_new()
img = Image.open(u)
u = u.split('.png')[0]+"_ctm.png"

img5 = Image.new(mode="RGB", size=(32,32), color="white")
img5.paste(img.crop((96, 96,112, 112)),(0,0))
img5.paste(img.crop((48, 0,64, 16)),(16,0))
img5.paste(img.crop((0, 48,16, 64)),(0,16))
img5.paste(img.crop((48, 48,64, 64)),(16,16))
img5.save(u)