1. Hit `Win + R` simultaneously on your keyboard. The **Run** window will appear. _See the screenshot below._

2. In **Open** input field type `regedit`. Hit **Enter** key or click **OK* button.

![](https://i.imgur.com/9qsCnOj.png)

3. The Registry Editor window will appear. On the left of the window, proceed to the following folders in this exact order: `HKEY_LOCAL_MACHINE`, `SOFTWARE`, `TruckersMP`. Click on a small arrow to the left in order to open these folders. 

> _Do note that registry "folders" doesn't work like folders in Explorer._ 
> _See the screenshot below in step 4._

4. If you did everything correct, you will see up to 4 entries to the right:
- `(Default)` and `InstallDir` will always be there
- `InstallLocationATS` (American Truck Simulator path) and/or `InstallLocationETS2` (Euro Truck Simulator 2 path) will be there if you have ever installed TruckersMP for these games.

![](https://i.imgur.com/2sPGGj3.png)

5. Find the `InstallLocationXXX` for the game in question and double-click on it.

6. The **Edit String** window will appear. In **Value data** input, delete all the symbols, then paste the folder path you've copied earlier. Click **OK**.

![](https://i.imgur.com/TTct1rT.png)
