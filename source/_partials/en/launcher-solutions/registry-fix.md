1. Proceed with steps 1-7 from the Second solution above. In result, you will have a game path copied.

2. Hit `Win + R` simultaneously on your keyboard. The "Run" window will appear.
   _TODO: here and down - Screenshot of the Run window with English UI_

3. In "Open:" input type `regedit`. Hit Enter or OK button.

4. The Registry Editor window will appear. On the left of the window, proceed to the following folders in this exact order: `HKEY_LOCAL_MACHINE`, `SOFTWARE`, `TruckersMP`. Click on a small arrow to the left in order to open these folders. _Do note that Registry Editor "folders" doesn't work like folders in Explorer._

5. If you do everything correct, to the right you will see up to 4 entries. `(Default)` and `InstallDir` will always be there, `InstallLocationATS` and/or `InstallLocationETS2` will be there if you have ever installed TruckersMP for these games.

6. Find the `InstallLocation` for the game in question and double-click on it.

7. The "Edit String" window will appear. In "Value data" input, delete all the symbols, then paste the folder path you've copied in Step 1. Hit OK.
