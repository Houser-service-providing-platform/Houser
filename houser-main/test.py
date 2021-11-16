from PIL import Image

# Opens a image in RGB mode
img = Image.open(r"/home/raushan/Downloads/test3.jpg")

# Size of the image in pixels (size of original image)
# (This is not mandatory)
width, height = img.size
print(width,height)

new_width  = 700
new_height = int(new_width * height / width)
img = img.resize((new_width,new_height), Image.ANTIALIAS)
img.save('somepic.jpg')