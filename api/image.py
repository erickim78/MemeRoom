from google_images_download import google_images_download  

def downloadimage(query):
    response = google_images_download.googleimagesdownload()  
    arguments = {
        "keywords": query,
        "format": "jpg",
        "limit" : 1,
        "print_urls": True,
        "size": "small",
        "safe_search": True,
        "aspect_ratio": "square"
    }

    try:
        response.download(arguments)
    except FileNotFoundError:
        arguments = {
            "keywords": query,
            "format": "jpg",
            "limit" : 1,
            "print_urls": True,
            "size": "small",
            "safe_search": True,
            "aspect_ratio": "wide"
        }

        try:
            response.download(arguments)
        except:
            pass                