from PIL import Image, ImageDraw, ImageFont
import textwrap
import os
import json
import base64


def makememe( text, location ):
    if len(os.listdir(location)) == 0:
        return
    for file in os.listdir(location):
        imgname = file

    img = location + "/" + imgname
    image = Image.open(img)
    draw = ImageDraw.Draw(image)
    im_width, im_height = image.size
    font = ImageFont.truetype('./fonts/Roboto-Bold.ttf', size=int(im_height/10))

    text = text.upper()

    char_width, char_height = font.getsize('A')
    linelength = im_width // char_width
    memetext = textwrap.wrap( text, width=linelength)

    yoffset = 5
    for line in memetext:
        l_width, l_height = font.getsize(line)
        xoffset = (im_width - l_width)/2
        draw.text( (xoffset,yoffset), line, fill='cyan', font=font,stroke_fill='black')
        yoffset += l_height

    image.save(img)

    #B64 Encode Meme and Return
    with open( img, mode ='rb') as file:
        c_img = file.read()
    data = base64.encodebytes(c_img).decode("utf-8")
    
    return data