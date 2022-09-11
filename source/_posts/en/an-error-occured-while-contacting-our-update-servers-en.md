---
contentId: an-error-occured-while-contacting-our-update-servers-en
title: An error occured while contacting our update servers
description: The solutions for An error occured while contacting our update servers error in TruckersMP
lang: en
tags:
  - English
  - Launcher
  - Common errors
toc: true
categories:
  - - English
    - Launcher
    - Common errors
author: CJMAXiK
date: 2022-09-11 21:06:19
updated: 2022-09-11 21:06:19
---
![](https://i.imgur.com/mAovWGQ.png)
<!-- more -->
# Error message in question
> **Connection Error - Retry?**
> 
> An error occured while contacting our update servers:
> *(error description)*
> 
> Press OK to try again or cancel to visit our download page.

# Before we begin
- This error might occur in many occasions, you need to read an error description before first `at` in the text. The rest of the message is meaningless to you as the player.
- For your convenience, the following errors will contain a cropped portion of the message.
- Close the error before proceeding further (`X` at the top right).
- If none of these solutions work, you will need to send a [Support ticket](https://truckersmp.com/support/ticket/create).

# Solutions
## Access to the path [...] is denied.
![](https://i.imgur.com/KIr3QUi.png)

This error means that the launcher cannot get access to the files inside its working folder.

1. Hit `Win + R` simultaneously on your keyboard. The **Run** window will appear. _See the screenshot below._

2. In **Open** input field paste the following: `%PROGRAMDATA%`. Hit **Enter** key or click **OK** button.

![](https://i.imgur.com/zDHhLOe.png)

3. The Explorer window will appear with the opened **ProgramData** folder. Locate `TruckersMP` folder and delete it (including everything inside). 

![](https://i.imgur.com/1MTjFK1.png)

4. Try to launch TruckersMP again.

---

## The process cannot access the file [..] because it is being used by another process.
![](https://i.imgur.com/Cu4zryl.png)

This error means that the launcher or the game is still opened in the background. Restart your PC.

---

## A connection attempt failed because [..] has failed to respond
![](https://i.imgur.com/eyVdGY3.png)

The launcher cannot get the data from the update servers. Reasons might be:
- Your ISP (Internet Service Provider) or system administrator blocks TruckersMP resources
- Your Internet connection is not verified at Cloudflare (network partner for TruckersMP)
- TruckersMP is experiencing a downtime or an update

Please try these solutions in particular order:
1. Simply try again in 5-10 minutes
2. Check if TruckersMP is experiencing a downtime or an update:
    - [TruckersMP Platform Status](https://truckersmpstatus.com/) - Game Backend Services
    - [#truckersmp-status](https://discord.com/channels/307433337126125568/579621522675728397) channel in their Discord guild - *for downtime*
    - [#truckersmp-updates](https://ptb.discord.com/channels/307433337126125568/808303834463338503) channel in their Discord guild - *for updates*
3. Restart your Internet connection (e.g. router)
4. Restart your PC
5. Go to [TruckersMP website](https://truckersmp.com/), make sure it is not blocked or doesn't ask for captcha verification.
6. Force sync the time on your PC. Proceed with [this article](https://pureinfotech.com/sync-clock-windows-10/).
7. Try with VPN. We might recommend you one of these:
    - [Psiphon](https://psiphon.ca)
    - [Windscribe](https://windscribe.net/download)
8. Ask your ISP or system administrator if they are blocking any resources by the following domains:
    - truckersmp.com
    - ets2mp.com
    - the IP at the bottom of the list

---

# The request was aborted: The operation has timed out
![](https://i.imgur.com/wrl3C3b.png)

There might be an issue with your Internet connection. If you're sure everything is correct, do the steps from **[A connection attempt failed](#A-connection-attempt-failed-because-has-failed-to-respond)** section.

---

## Unexpected character
![](https://i.imgur.com/DclAlGm.png)

There might be an issue with your Internet connection. If you're sure everything is correct, do the steps from **[A connection attempt failed](#A-connection-attempt-failed-because-has-failed-to-respond)** section.

---

## Exception from HRESULT: [..]
*System.Runtime.Interop.Services.COMException 0x80072EE4*
![](https://i.imgur.com/F4D9SZ8.png)

> This solution is incomplete. Please follow [this article](https://truckersmp.com/kb/917) from TruckersMP Knowledge Base.

---

# My error is not in the list
Simply try again in 5-10 minutes. If not fixed, you will need to send a [Support ticket](https://truckersmp.com/support/ticket/create).
