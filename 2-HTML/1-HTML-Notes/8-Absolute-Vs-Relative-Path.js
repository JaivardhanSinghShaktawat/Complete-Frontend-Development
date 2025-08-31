/* 
---------------------------- Absolute Vs Relative Path ------------------------------

--> Absolute Path : It is the complete path starting from the root to the 
    folder/directory in which your are currently present or your project or file
    is present.

    Ex : C:/Project/Images/image.jpg (Windows)
    /Project/Images/image.jpg (mac or linux)

    In unix and linux forward slash is used and in windows backward slash is used.

    Absolute path can be used to link external server web pages or external 
    images or other resources.
    
--> Relative Path : It is the shortest path.It is relative to the current file or 
    folder in which your are currently present. 
    It is the path that starts from the folder/directory that you are currently present.

    Ex : 

    ./about.html
    It means look for about.html in the current directory.

    Relative path means it is relative to something.

     . : represents the current folder.
    .. : represents the parent folder. 
    ../.. : represents the grand parent folder. 

    Relative path is generally used when we want to provide the path to some 
    resource that is present on the same server. 

--> Note : Always use relative path while working with HTML , CSS and JavaScript.
    This is because the website when hosted is deployed on the server.On the server 
    the absolute path might be different but the relative path will be same. 
*/
