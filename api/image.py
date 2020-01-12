from google_images_download import google_images_download  
import uuid

def downloadimage(query):
    imgid = str(uuid.uuid1())
    imgdirectory = "./images/" + imgid

    response = google_images_download.googleimagesdownload()  
    arguments = {
        "keywords": query,
        "format": "jpg",
        "limit" : 1,
        "print_urls": True,
        #"size": "medium",
        "safe_search": True,
        "aspect_ratio": "square",
        "output_directory": "./",
        "image_directory": imgdirectory
    }

    try:
        response.download(arguments)
        return imgdirectory
    except FileNotFoundError:
        arguments = {
            "keywords": query,
            "format": "png",
            "limit" : 1,
            "print_urls": True,
            #"size": "medium",
            "safe_search": True,
            "output_directory": "./",
            "image_directory": imgdirectory
        }

        try:
            response.download(arguments)
            return imgdirectory
        except:
            pass      
         