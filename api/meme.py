from PIL import Image, ImageDraw, ImageFont
import textwrap

def makememe( text, img ):
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
        draw.text( (xoffset,yoffset), line, fill='white', font=font)
        y += l_height

    image.save('output.png')