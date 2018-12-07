/*
 * (c) Copyright Ascensio System SIA 2010-2018
 *
 * This program is a free software product. You can redistribute it and/or
 * modify it under the terms of the GNU Affero General Public License (AGPL)
 * version 3 as published by the Free Software Foundation. In accordance with
 * Section 7(a) of the GNU AGPL its Section 15 shall be amended to the effect
 * that Ascensio System SIA expressly excludes the warranty of non-infringement
 * of any third-party rights.
 *
 * This program is distributed WITHOUT ANY WARRANTY; without even the implied
 * warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR  PURPOSE. For
 * details, see the GNU AGPL at: http://www.gnu.org/licenses/agpl-3.0.html
 *
 * You can contact Ascensio System SIA at Lubanas st. 125a-25, Riga, Latvia,
 * EU, LV-1021.
 *
 * The  interactive user interfaces in modified source and object code versions
 * of the Program must display Appropriate Legal Notices, as required under
 * Section 5 of the GNU AGPL version 3.
 *
 * Pursuant to Section 7(b) of the License you must retain the original Product
 * logo when distributing the program. Pursuant to Section 7(e) we decline to
 * grant you any rights under trademark law for use of our trademarks.
 *
 * All the Product's GUI elements, including illustrations and icon sets, as
 * well as technical writing content are licensed under the terms of the
 * Creative Commons Attribution-ShareAlike 4.0 International. See the License
 * terms at http://creativecommons.org/licenses/by-sa/4.0/legalcode
 *
 */

"use strict";

(function(window, undefined){
    var AscBrowser = AscCommon.AscBrowser;

var TRACK_CIRCLE_RADIUS     = 5;
var TRACK_RECT_SIZE2        = 4;
var TRACK_RECT_SIZE         = 8;
var TRACK_RECT_SIZE_CT      = 6;
var TRACK_DISTANCE_ROTATE   = 25;
var TRACK_DISTANCE_ROTATE2  = 25;
var TRACK_ADJUSTMENT_SIZE   = 10;
var TRACK_WRAPPOINTS_SIZE   = 6;
var IMAGE_ROTATE_TRACK_W    = 21;

var bIsUseImageRotateTrack  = true;
if (bIsUseImageRotateTrack)
{
    window.g_track_rotate_marker = new Image();
	window.g_track_rotate_marker;
    window.g_track_rotate_marker.asc_complete = false;
    window.g_track_rotate_marker.onload = function(){
        window.g_track_rotate_marker.asc_complete = true;
    };
    window.g_track_rotate_marker.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAAVCAYAAACpF6WWAAAACXBIWXMAAAsTAAALEwEAmpwYAAAGAGlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDAgNzkuMTYwNDUxLCAyMDE3LzA1LzA2LTAxOjA4OjIxICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgeG1sbnM6cGhvdG9zaG9wPSJodHRwOi8vbnMuYWRvYmUuY29tL3Bob3Rvc2hvcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxOCAoTWFjaW50b3NoKSIgeG1wOkNyZWF0ZURhdGU9IjIwMTgtMTEtMDZUMTg6NTQ6MDUrMDg6MDAiIHhtcDpNb2RpZnlEYXRlPSIyMDE4LTExLTA2VDE5OjAxOjA5KzA4OjAwIiB4bXA6TWV0YWRhdGFEYXRlPSIyMDE4LTExLTA2VDE5OjAxOjA5KzA4OjAwIiBkYzpmb3JtYXQ9ImltYWdlL3BuZyIgcGhvdG9zaG9wOkNvbG9yTW9kZT0iMyIgcGhvdG9zaG9wOklDQ1Byb2ZpbGU9InNSR0IgSUVDNjE5NjYtMi4xIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjEwZjQxNTIxLWQ3YTQtNGMwZS1hM2E4LWNkZDA4NTgzZmE0YSIgeG1wTU06RG9jdW1lbnRJRD0iYWRvYmU6ZG9jaWQ6cGhvdG9zaG9wOjM3YjVhYzhjLWU0Y2ItYmM0NS1iNjM1LWUzMTE2YjQzMWZlMSIgeG1wTU06T3JpZ2luYWxEb2N1bWVudElEPSJ4bXAuZGlkOmUzYjQzMjZjLTFmMDctNGM5NS04MzdiLWMxYmUzYTUzYmRiNiI+IDx4bXBNTTpIaXN0b3J5PiA8cmRmOlNlcT4gPHJkZjpsaSBzdEV2dDphY3Rpb249ImNyZWF0ZWQiIHN0RXZ0Omluc3RhbmNlSUQ9InhtcC5paWQ6ZTNiNDMyNmMtMWYwNy00Yzk1LTgzN2ItYzFiZTNhNTNiZGI2IiBzdEV2dDp3aGVuPSIyMDE4LTExLTA2VDE4OjU0OjA1KzA4OjAwIiBzdEV2dDpzb2Z0d2FyZUFnZW50PSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxOCAoTWFjaW50b3NoKSIvPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0ic2F2ZWQiIHN0RXZ0Omluc3RhbmNlSUQ9InhtcC5paWQ6MTBmNDE1MjEtZDdhNC00YzBlLWEzYTgtY2RkMDg1ODNmYTRhIiBzdEV2dDp3aGVuPSIyMDE4LTExLTA2VDE5OjAxOjA5KzA4OjAwIiBzdEV2dDpzb2Z0d2FyZUFnZW50PSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxOCAoTWFjaW50b3NoKSIgc3RFdnQ6Y2hhbmdlZD0iLyIvPiA8L3JkZjpTZXE+IDwveG1wTU06SGlzdG9yeT4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz7zneI2AAADSUlEQVQ4ja2Uz4uVVRjHP89z3vvee5vRG02OlaVprsQgpEWrCBwFCdz2Hxhtiom2RtRW3AhCuWgRrQWhHxvDyM1klCQGItEkJmboMDpXvfd9z/Nt8d47zm0GatGzec97Dudzvs/3POcxSfzfUYwHHwIlcO5C5sofFZ0OdJNT4NyratwMjHfM+KZ/P1/au7tFerzFlavQAXD46bWG5f/paAMskOLNkL7D7Knx9Ebx71CjBXoas5eBKaRehL432O0GG5lXbDCHAY7tHOZ4tyIOAc8q1B6vd9v23LWb9UJ7kA50O/4jg0nZq9A2jTcJI2AedDxLhNT4uVZJASt9PdF/8PD8pl73FbCfFRtAb/cbM5aH9XEn5iXDEIVZ38zOh0igOYBci+4mW0Icq/rxWyrShA2r0B8W4M+Hg7eGyvOddmNWmH38WCqOFm5/LdfVYc/M5SyI9OmTO4r3Iuc7dxaFF5CVgTQJvZvrWaGPkgEE1uq87TlOhIKQQ2Zf2fWVTk9zS4u2YCMTZTUCQlqFrt5+P+o3RMw4hnv6PBV+ws2pQjzINQn7rFO2dk33fCFC5AyYYRYgTZTXqlIT+xldiFOe9MpwS2QLMhWG/SogA2UX7t/OYEHR9hKxHbgOPJxQirRnNFoM1ZfrPKCOISJATT0aosBJhYgIlEFwrMr1VZFPrlMKVoLA6IvcH+cjwN1ARl3BvbuZHIGyAZQK5qwRtX9MeqTUdGtE2YX7Ttyw5BiGu+NTJYNhZvm68JSQHMl2Cl5onvFo/1qok75VU21dkx10EoUVFCkRTe5YEmUr4SowHPADQCmEU5xbD5V/PR5H5Pcjx9aIGHnJxCMXgYitUj76CPRo/yo0rD7r2OnR76ykL0HbDMbNYI1T2tasMwvgZqcjVWfXXZTJMGw+o1dBM5j25YjLhn1iyc4o6xay2SAOCx0B9UY7b7tsnnri0CavF78ajLW/VFX6QhHPeAnI1vdNF/UA3P1Gq2WvE1wEuHSoPZn+OPKQi9Mzxd7NW4pTXhlLQzHIQbLme2cobGj0thSnpmeKvXnYANfGun6aayinWNpsxZGV63xw8HkOX+vbnt9X6t6O6dby9in9cmGRMzPTxY27Cu7dhPQPyt/vB5Qk5FKp+QAAAABJRU5ErkJggg==";

    window.g_track_rotate_marker2 = new Image();
	window.g_track_rotate_marker2;
    window.g_track_rotate_marker2.asc_complete = false;
    window.g_track_rotate_marker2.onload = function(){
        window.g_track_rotate_marker2.asc_complete = true;
    };
    window.g_track_rotate_marker2.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAAH7+Yj7AAAABGdBTUEAALGPC/xhBQAABjNJREFUWAnlWG+IVFUUv+fNuPPeopGZlguGUGQ7b5dNsuiDlVvW7kxZJu4WbBB+bYUgwQ+SIP2jsC8VWV8CRSNIkIVyZlaNNa3oQ6Wt+6cMgr5sbGVbCPvejDPvdO7Mnrv3/ZmZt65B0MBw/v3uuef+O/fcJ0SjX3tuFuVfYXwCaQ1lmWMkwKdcn8OVQsDlINAvVzvKOx8prT2CS9M556JSkPCrEnSGQ2Kq23x8uuDs0BXAQnveOS4QszUZxoTADgFidDLT2sUY0Z5zhut10XXKvV0CqwM3hfmMahVgSiXvR6lSXUshwuvFyWzrOmlb3C/Cs7/rdN45jIgqXupWhZbkvqUX+gkw4Af08A7W+6gE6d3ZBXfQB2BBB7GOqV3AGyTv20BsZJouzO7yPOeSD0hLeJIBTNETb9JUewqYEMZttM6b0/nZtxjUftypSH4yayUkVcO3C6Uuzyufl0r+6dPDuljUHnYebAZsOOhgY6+Cn8mZtAvOK0Eby2oorJCUDsEeWsRXdV0UDwK+nMhaG3Wbz2G6UHwCvcoQAwyA+8Yz1hdSpm11hHbMgADAJYZ582gP/MY4nSqHnSeLneUrlVFpNMDYP54xd+vAuLxySHMzQ42ulw3jrpo8xXxAuY1aFAAjtMGaRVW6gqeCGOVwImP2s1GuZDpXWs9yFKUd7tDmXSNtRlKohVFD5kZ23n3OQ+9dlhtSWqDJjKWCktiQQ92BnXO3eKJyiGDLWU8r/8EtaA7ms1Bk3X+D2rni9jiR+MbfqAEK7yG6CMqNMNIW3yHgPXTdJBplRemw7qJQAuj2UAzR1rhOAoO/1lVWy7cb4EpQH+mQhkbJ0H9/BxtKOWVZy893w1+6zTfkfYhGbUg+Z7Q9IHSKZOIIOpOOfREG5ucXOp9ruXe2AcDBiYy1g/VBqi60uRMyZ4dJyv1pHUw9z9gZa+VRgOrdoNt0XkXIEUgjZw4dGJf3zWG1EcDXcRtLXEfOfUTHhxwaAg7rgEY8ZRyvIrxholQS1X4hhwiexcamFLE6ZYBiBWPDDhGeZ2NsCuIMYzWHtaufkyYD6lG9hEihuZNxyqEB4gFWVrMxCxG0ms2p1GDTuSz8zrxyWLsu50pjRFPWIneN4I0MZEr1ytsoyt+xXK1jWCCq9iHr5MrRsEN6tuuUrttBum4P6LrIhrTJZe1aLXR1sM4bRvLO8d6W73Wd5NWQdQOdlHVrhWXK+0PXUwaaMYTxuDxJUc782P+TROv6Iv3djnzxycWOO3JJFusUBF1niKkKVo7JTWjnZ1+4Wp+RmzCus00jmPzDdTfSq4VSO66ms9BGTxiLnG6hynRp0I9hwHt9PebOfTCXNIKACHlBAdaeE5X9FMzDEb5iq6guz1urzO10p882a9Q0QJolc9pxD1JQTzVzthA73cRHkoa5q17dz74aBkil5hue8HYzOEQBcgbC+yut1MnT3eBKe902AH8Dwl47kzrQ7FbX+1Elg66Ue2vacX6i4Nbq+ioPcNYAc+t4L/wZspHCk/Xe3OcUAHHOMMTOsZ7Wrxg7wUxMGhkgLenP1H6N3weUki3QfmGzKW11f3SCR1PC6tcvrLrgGIbQEsscRiniZX9b8JYkzNXN9ou/zbWRQjNIMzAw/8Gr1gmN4vV/IzgquF+i61tOCHUBl8EQj070Wmf1oYUSNeW0W3VAlQcxGdItUkHJ+2nKDHvnKwlcRt9U6j9puT9AVAUj61DgvcxfK0pfdtQzmH3S6o0zzzQ0g/SN4R02KopisONEaYOSF8nY+dLddNLDH8Ei+g4dEtk37Y3PafrvD8ZBaaN/ItN6NKhfiEwVZR9dhx+H28AZeg2pMpftkQFKIxWFnxB5jIHzFC5TXddHleXwvK45R0+zHg+RBofLItCfUk24JUIfLoF1kHwVVRDzAnyvUQ0CszSrx+gbz1AyiRfKidSUNCYrxbZyGToRva00W9soqFat0TxLj6AEQGYsa56YV/q5ujOow6iu20Yvrg/pxJm6/qp5AJceCwNjmdSxZj5iBchOaPMkxvPus3SqXyPdTayPSaepitljZ8xDC7mLFxRgVCBU98GG02JF0S21IWCbxFBRMJUyW6a+2SQuUdUSzPtRburq/gHFUU8SzJz1dwAAAABJRU5ErkJggg==";


    TRACK_DISTANCE_ROTATE2 = 18;
}


function COverlay()
{
    this.m_oControl = null;
    this.m_oContext = null;

    this.min_x = 0xFFFF;
    this.min_y = 0xFFFF;
    this.max_x = -0xFFFF;
    this.max_y = -0xFFFF;

    this.m_bIsShow = false;
    this.m_bIsAlwaysUpdateOverlay = false;

    this.m_oHtmlPage = null;

    this.DashLineColor = "#000000";
    this.ClearAll = false;

    this.IsRetina = false;
    this.IsCellEditor = false;
}

COverlay.prototype =
{
    init : function(context, controlName, x, y, w_pix, h_pix, w_mm, h_mm)
    {
        this.m_oContext = context;
        this.m_oControl = AscCommon.CreateControl(controlName);

        this.m_oHtmlPage = new AscCommon.CHtmlPage();
        this.m_oHtmlPage.init(x, y, w_pix, h_pix, w_mm, h_mm);
    },

    Clear : function()
    {
        if (null == this.m_oContext)
        {
            this.m_oContext = this.m_oControl.HtmlElement.getContext('2d');

            this.m_oContext.imageSmoothingEnabled = false;
            this.m_oContext.mozImageSmoothingEnabled = false;
            this.m_oContext.oImageSmoothingEnabled = false;
            this.m_oContext.webkitImageSmoothingEnabled = false;
        }

        this.SetBaseTransform();

        this.m_oContext.beginPath();
        if (this.max_x != -0xFFFF && this.max_y != -0xFFFF)
        {
            if (this.ClearAll === true)
            {
                this.m_oContext.clearRect(0, 0, this.m_oControl.HtmlElement.width, this.m_oControl.HtmlElement.height);
                this.ClearAll = false;
            }
            else
            {
                var _eps = 5;
                this.m_oContext.clearRect(this.min_x - _eps, this.min_y - _eps, this.max_x - this.min_x + 2*_eps, this.max_y - this.min_y + 2*_eps);
            }
        }
        this.min_x = 0xFFFF;
        this.min_y = 0xFFFF;
        this.max_x = -0xFFFF;
        this.max_y = -0xFFFF;
    },

    GetImageTrackRotationImage : function()
    {
        return this.IsRetina ? window.g_track_rotate_marker2 : window.g_track_rotate_marker;
    },

    SetTransform : function(sx, shy, shx, sy, tx, ty)
    {
        this.SetBaseTransform();
        this.m_oContext.setTransform(sx, shy, shx, sy, tx, ty);

    },

    SetBaseTransform : function()
    {
        if (this.IsRetina)
            this.m_oContext.setTransform(AscCommon.AscBrowser.retinaPixelRatio, 0, 0, AscCommon.AscBrowser.retinaPixelRatio, 0, 0);
        else
            this.m_oContext.setTransform(1, 0, 0, 1, 0, 0);
    },

    Show : function()
    {
        if (this.m_bIsShow)
            return;

        this.m_bIsShow = true;
        this.m_oControl.HtmlElement.style.display = "block";
    },
    UnShow : function()
    {
        if (!this.m_bIsShow)
            return;

        this.m_bIsShow = false;
        this.m_oControl.HtmlElement.style.display = "none";
    },

    VertLine : function(position, bIsSimpleAdd)
    {
        if (bIsSimpleAdd !== true)
        {
            this.Clear();
            if (this.m_bIsAlwaysUpdateOverlay || true/*мало ли что есть на оверлее*/)
            {
                if (!editor.WordControl.OnUpdateOverlay())
                {
                    editor.WordControl.EndUpdateOverlay();
                }
            }
        }

        if (this.min_x > position)
            this.min_x = position;
        if (this.max_x < position)
            this.max_x = position;

        //this.min_x = position;
        //this.max_x = position;
        this.min_y = 0;
        this.max_y = this.m_oControl.HtmlElement.height;

        this.m_oContext.lineWidth = 1;

        var x = ((position + 0.5) >> 0) + 0.5;
        var y = 0;

        this.m_oContext.strokeStyle = this.DashLineColor;
        this.m_oContext.beginPath();

        while (y < this.max_y)
        {
            this.m_oContext.moveTo(x, y); y++;
            this.m_oContext.lineTo(x, y); y+=1;
            this.m_oContext.moveTo(x, y); y++;
            this.m_oContext.lineTo(x, y); y+=1;
            this.m_oContext.moveTo(x, y); y++;
            this.m_oContext.lineTo(x, y); y++;

            y += 5;
        }

        this.m_oContext.stroke();

        y = 1;
        this.m_oContext.strokeStyle = "#FFFFFF";
        this.m_oContext.beginPath();

        while (y < this.max_y)
        {
            this.m_oContext.moveTo(x, y); y++;
            this.m_oContext.lineTo(x, y); y+=1;
            this.m_oContext.moveTo(x, y); y++;
            this.m_oContext.lineTo(x, y); y+=1;
            this.m_oContext.moveTo(x, y); y++;
            this.m_oContext.lineTo(x, y); y++;

            y += 5;
        }

        this.m_oContext.stroke();
        this.Show();
    },

    VertLine2 : function(position)
    {
        if (this.min_x > position)
            this.min_x = position;
        if (this.max_x < position)
            this.max_x = position;

        var _old_global = this.m_oContext.globalAlpha;
        this.m_oContext.globalAlpha = 1;

        this.min_y = 0;
        this.max_y = this.m_oControl.HtmlElement.height;

        this.m_oContext.lineWidth = 1;

        var x = ((position + 0.5) >> 0) + 0.5;
        var y = 0;

        /*
        this.m_oContext.strokeStyle = "#FFFFFF";
        this.m_oContext.beginPath();
        this.m_oContext.moveTo(x, y);
        this.m_oContext.lineTo(x, this.max_y);
        this.m_oContext.stroke();
        */

        this.m_oContext.strokeStyle = this.DashLineColor;
        this.m_oContext.beginPath();

        var dist = 1;

        while (y < this.max_y)
        {
            this.m_oContext.moveTo(x, y);
            y += dist;
            this.m_oContext.lineTo(x, y);
            y += dist;
        }

        this.m_oContext.stroke();
        this.m_oContext.beginPath();
        this.Show();

        this.m_oContext.globalAlpha = _old_global;
    },

    HorLine : function(position, bIsSimpleAdd)
    {
        if (bIsSimpleAdd !== true)
        {
            this.Clear();
            if (this.m_bIsAlwaysUpdateOverlay || true/*мало ли что есть на оверлее*/)
            {
                if (!editor.WordControl.OnUpdateOverlay())
                {
                    editor.WordControl.EndUpdateOverlay();
                }
            }
        }

        this.min_x = 0;
        this.max_x = this.m_oControl.HtmlElement.width;

        if (this.min_y > position)
            this.min_y = position;
        if (this.max_y < position)
            this.max_y = position;

        this.m_oContext.lineWidth = 1;

        var y = ((position + 0.5) >> 0) + 0.5;
        var x = 0;

        this.m_oContext.strokeStyle = this.DashLineColor;
        this.m_oContext.beginPath();

        while (x < this.max_x)
        {
            this.m_oContext.moveTo(x, y); x++;
            this.m_oContext.lineTo(x, y); x+=1;
            this.m_oContext.moveTo(x, y); x++;
            this.m_oContext.lineTo(x, y); x+=1;
            this.m_oContext.moveTo(x, y); x++;
            this.m_oContext.lineTo(x, y); x++;

            x += 5;
        }

        this.m_oContext.stroke();

        x = 1;
        this.m_oContext.strokeStyle = "#FFFFFF";
        this.m_oContext.beginPath();

        while (x < this.max_x)
        {
            this.m_oContext.moveTo(x, y); x++;
            this.m_oContext.lineTo(x, y); x+=1;
            this.m_oContext.moveTo(x, y); x++;
            this.m_oContext.lineTo(x, y); x+=1;
            this.m_oContext.moveTo(x, y); x++;
            this.m_oContext.lineTo(x, y); x++;

            x += 5;
        }

        this.m_oContext.stroke();
        this.Show();
    },

    HorLine2 : function(position)
    {
        if (this.min_y > position)
            this.min_y = position;
        if (this.max_y < position)
            this.max_y = position;

        var _old_global = this.m_oContext.globalAlpha;
        this.m_oContext.globalAlpha = 1;

        this.min_x = 0;
        this.max_x = this.m_oControl.HtmlElement.width;

        this.m_oContext.lineWidth = 1;

        var y = ((position + 0.5) >> 0) + 0.5;
        var x = 0;

        /*
        this.m_oContext.strokeStyle = "#FFFFFF";
        this.m_oContext.beginPath();
        this.m_oContext.moveTo(x, y);
        this.m_oContext.lineTo(this.max_x, y);
        this.m_oContext.stroke();
        */

        this.m_oContext.strokeStyle = this.DashLineColor;
        this.m_oContext.beginPath();

        var dist = 1;

        while (x < this.max_x)
        {
            this.m_oContext.moveTo(x, y);
            x += dist;
            this.m_oContext.lineTo(x, y);
            x += dist;
        }

        this.m_oContext.stroke();
        this.m_oContext.beginPath();
        this.Show();

        this.m_oContext.globalAlpha = _old_global;
    },

    CheckPoint1 : function(x,y)
    {
        if (x < this.min_x)
            this.min_x = x;
        if (y < this.min_y)
            this.min_y = y;
    },
    CheckPoint2 : function(x,y)
    {
        if (x > this.max_x)
            this.max_x = x;
        if (y > this.max_y)
            this.max_y = y;
    },
    CheckPoint : function(x,y)
    {
        if (x < this.min_x)
            this.min_x = x;
        if (y < this.min_y)
            this.min_y = y;
        if (x > this.max_x)
            this.max_x = x;
        if (y > this.max_y)
            this.max_y = y;
    },

    AddRect2 : function(x,y,r)
    {
        var _x = x - ((r / 2) >> 0);
        var _y = y - ((r / 2) >> 0);
        this.CheckPoint1(_x,_y);
        this.CheckPoint2(_x+r,_y+r);

        this.m_oContext.moveTo(_x,_y);
        this.m_oContext.rect(_x,_y,r,r);
    },

    AddRect3 : function(x,y,r, ex1, ey1, ex2, ey2)
    {
        var _r = r / 2;

        var x1 = x + _r * (ex2 - ex1);
        var y1 = y + _r * (ey2 - ey1);

        var x2 = x + _r * (ex2 + ex1);
        var y2 = y + _r * (ey2 + ey1);

        var x3 = x + _r * (-ex2 + ex1);
        var y3 = y + _r * (-ey2 + ey1);

        var x4 = x + _r * (-ex2 - ex1);
        var y4 = y + _r * (-ey2 - ey1);

        this.CheckPoint(x1,y1);
        this.CheckPoint(x2,y2);
        this.CheckPoint(x3,y3);
        this.CheckPoint(x4,y4);

        var ctx = this.m_oContext;
        ctx.moveTo(x1,y1);
        ctx.lineTo(x2,y2);
        ctx.lineTo(x3,y3);
        ctx.lineTo(x4,y4);
        ctx.closePath();
    },

    AddRect : function(x,y,w,h)
    {
        this.CheckPoint1(x,y);
        this.CheckPoint2(x + w,y + h);

        this.m_oContext.moveTo(x,y);
        this.m_oContext.rect(x,y,w,h);
        //this.m_oContext.closePath();
    },
    CheckRectT : function(x,y,w,h,trans,eps)
    {
        var x1 = trans.TransformPointX(x, y);
        var y1 = trans.TransformPointY(x, y);

        var x2 = trans.TransformPointX(x+w, y);
        var y2 = trans.TransformPointY(x+w, y);

        var x3 = trans.TransformPointX(x+w, y+h);
        var y3 = trans.TransformPointY(x+w, y+h);

        var x4 = trans.TransformPointX(x, y+h);
        var y4 = trans.TransformPointY(x, y+h);

        this.CheckPoint(x1, y1);
        this.CheckPoint(x2, y2);
        this.CheckPoint(x3, y3);
        this.CheckPoint(x4, y4);

        if (eps !== undefined)
        {
            this.min_x -= eps;
            this.min_y -= eps;
            this.max_x += eps;
            this.max_y += eps;
        }
    },
    CheckRect : function(x,y,w,h)
    {
        this.CheckPoint1(x,y);
        this.CheckPoint2(x + w,y + h);
    },
    AddEllipse : function(x,y,r)
    {
        this.CheckPoint1(x-r,y-r);
        this.CheckPoint2(x+r,y+r);

        this.m_oContext.moveTo(x+r,y);
        this.m_oContext.arc(x,y,r,0,Math.PI*2,false);
        //this.m_oContext.closePath();
    },

	AddDiamond : function(x,y,r)
	{
		this.CheckPoint1(x-r,y-r);
		this.CheckPoint2(x+r,y+r);

		this.m_oContext.moveTo(x-r,y);
		this.m_oContext.lineTo(x, y-r);
		this.m_oContext.lineTo(x+r, y);
		this.m_oContext.lineTo(x, y+r);
		this.m_oContext.lineTo(x-r, y);
		//this.m_oContext.closePath();
	},

    AddRoundRect : function(x, y, w, h, r)
    {
        if (w < (2 * r) || h < (2 * r))
            return this.AddRect(x, y, w, h);

        this.CheckPoint1(x,y);
        this.CheckPoint2(x + w,y + h);

        var _ctx = this.m_oContext;
        _ctx.moveTo(x + r, y);
        _ctx.lineTo(x + w - r, y);
        _ctx.quadraticCurveTo(x + w, y, x + w, y + r);
        _ctx.lineTo(x + w, y + h - r);
        _ctx.quadraticCurveTo(x + w, y + h, x + w - r, y + h);
        _ctx.lineTo(x + r, y + h);
        _ctx.quadraticCurveTo(x, y + h, x, y + h - r);
        _ctx.lineTo(x, y + r);
        _ctx.quadraticCurveTo(x, y, x + r, y);
    },

    AddRoundRectCtx : function(ctx, x, y, w, h, r)
    {
        if (w < (2 * r) || h < (2 * r))
            return ctx.rect(x, y, w, h);

        var _ctx = this.m_oContext;
        _ctx.moveTo(x + r, y);
        _ctx.lineTo(x + w - r, y);
        _ctx.quadraticCurveTo(x + w, y, x + w, y + r);
        _ctx.lineTo(x + w, y + h - r);
        _ctx.quadraticCurveTo(x + w, y + h, x + w - r, y + h);
        _ctx.lineTo(x + r, y + h);
        _ctx.quadraticCurveTo(x, y + h, x, y + h - r);
        _ctx.lineTo(x, y + r);
        _ctx.quadraticCurveTo(x, y, x + r, y);
    }
};

function CAutoshapeTrack()
{
    this.m_oContext = null;
    this.m_oOverlay = null;

    this.Graphics = null;

    this.MaxEpsLine = 0;
    this.IsTrack = true;

    this.PageIndex = -1;
    this.CurrentPageInfo = null;
}

CAutoshapeTrack.prototype =
{
    SetFont : function(font)
    {
    },

    init : function(overlay, x, y, r, b, w_mm, h_mm)
    {
        this.m_oOverlay = overlay;
        this.m_oContext = this.m_oOverlay.m_oContext;

        this.Graphics = new AscCommon.CGraphics();

        var _scale = this.m_oOverlay.IsRetina? AscCommon.AscBrowser.retinaPixelRatio : 1;

        this.Graphics.init(this.m_oContext, _scale * (r - x), _scale * (b - y), w_mm, h_mm);

        this.Graphics.m_oCoordTransform.tx = _scale * x;
        this.Graphics.m_oCoordTransform.ty = _scale * y;

        this.Graphics.SetIntegerGrid(false);


        this.Graphics.globalAlpha = 0.5;
        this.m_oContext.globalAlpha = 0.5;
    },
    SetIntegerGrid : function(b)
    {
    },
    // draw styles
    p_color : function(r,g,b,a)
    {
        this.Graphics.p_color(r, g, b, a);
    },
    p_width : function(w)
    {
        this.Graphics.p_width(w);

        var xx1 = 0;
        var yy1 = 0;
        var xx2 = 1;
        var yy2 = 1;

        var xxx1 = this.Graphics.m_oFullTransform.TransformPointX(xx1, yy1);
        var yyy1 = this.Graphics.m_oFullTransform.TransformPointY(xx1, yy1);
        var xxx2 = this.Graphics.m_oFullTransform.TransformPointX(xx2, yy2);
        var yyy2 = this.Graphics.m_oFullTransform.TransformPointY(xx2, yy2);

        var _len2 = ((xxx2 - xxx1)*(xxx2 - xxx1) + (yyy2 - yyy1)*(yyy2 - yyy1));
        var koef = Math.sqrt(_len2 / 2);

        var _EpsLine = (w * koef / 1000) >> 0;
        _EpsLine += 5;

        if (_EpsLine > this.MaxEpsLine)
            this.MaxEpsLine = _EpsLine;
    },
    p_dash : function(params)
    {
        this.Graphics.p_dash(params);
    },
    b_color1 : function(r,g,b,a)
    {
        this.Graphics.b_color1(r,g,b,a);
    },

    // path commands
    _s : function()
    {
        this.Graphics._s();
    },
    _e : function()
    {
        this.Graphics._e();
    },
    _z : function()
    {
        this.Graphics._z();
    },
    _m : function(x,y)
    {
        this.Graphics._m(x,y);

        var _x = this.Graphics.m_oFullTransform.TransformPointX(x,y);
        var _y = this.Graphics.m_oFullTransform.TransformPointY(x,y);
        this.m_oOverlay.CheckPoint(_x, _y);
    },
    _l : function(x,y)
    {
        this.Graphics._l(x,y);

        var _x = this.Graphics.m_oFullTransform.TransformPointX(x,y);
        var _y = this.Graphics.m_oFullTransform.TransformPointY(x,y);
        this.m_oOverlay.CheckPoint(_x, _y);
    },
    _c : function(x1,y1,x2,y2,x3,y3)
    {
        this.Graphics._c(x1,y1,x2,y2,x3,y3);

        var _x1 = this.Graphics.m_oFullTransform.TransformPointX(x1,y1);
        var _y1 = this.Graphics.m_oFullTransform.TransformPointY(x1,y1);

        var _x2 = this.Graphics.m_oFullTransform.TransformPointX(x2,y2);
        var _y2 = this.Graphics.m_oFullTransform.TransformPointY(x2,y2);

        var _x3 = this.Graphics.m_oFullTransform.TransformPointX(x3,y3);
        var _y3 = this.Graphics.m_oFullTransform.TransformPointY(x3,y3);

        this.m_oOverlay.CheckPoint(_x1, _y1);
        this.m_oOverlay.CheckPoint(_x2, _y2);
        this.m_oOverlay.CheckPoint(_x3, _y3);
    },
    _c2 : function(x1,y1,x2,y2)
    {
        this.Graphics._c2(x1,y1,x2,y2);

        var _x1 = this.Graphics.m_oFullTransform.TransformPointX(x1,y1);
        var _y1 = this.Graphics.m_oFullTransform.TransformPointY(x1,y1);

        var _x2 = this.Graphics.m_oFullTransform.TransformPointX(x2,y2);
        var _y2 = this.Graphics.m_oFullTransform.TransformPointY(x2,y2);

        this.m_oOverlay.CheckPoint(_x1, _y1);
        this.m_oOverlay.CheckPoint(_x2, _y2);
    },
    ds : function()
    {
        this.Graphics.ds();
    },
    df : function()
    {
        this.Graphics.df();
    },

    // canvas state
    save : function()
    {
        this.Graphics.save();
    },
    restore : function()
    {
        this.Graphics.restore();
    },
    clip : function()
    {
        this.Graphics.clip();
    },

    // transform
    reset : function()
    {
        this.Graphics.reset();
    },
    transform3 : function(m)
    {
        this.Graphics.transform3(m);
    },
    transform : function(sx,shy,shx,sy,tx,ty)
    {
        this.Graphics.transform(sx,shy,shx,sy,tx,ty);
    },
    drawImage : function(image, x, y, w, h, alpha, srcRect, nativeImage)
    {
        this.Graphics.drawImage(image, x, y, w, h, undefined, srcRect, nativeImage);

        var _x1 = this.Graphics.m_oFullTransform.TransformPointX(x,y);
        var _y1 = this.Graphics.m_oFullTransform.TransformPointY(x,y);

        var _x2 = this.Graphics.m_oFullTransform.TransformPointX(x+w,y);
        var _y2 = this.Graphics.m_oFullTransform.TransformPointY(x+w,y);

        var _x3 = this.Graphics.m_oFullTransform.TransformPointX(x+w,(y+h));
        var _y3 = this.Graphics.m_oFullTransform.TransformPointY(x+w,(y+h));

        var _x4 = this.Graphics.m_oFullTransform.TransformPointX(x,(y+h));
        var _y4 = this.Graphics.m_oFullTransform.TransformPointY(x,(y+h));

        this.m_oOverlay.CheckPoint(_x1, _y1);
        this.m_oOverlay.CheckPoint(_x2, _y2);
        this.m_oOverlay.CheckPoint(_x3, _y3);
        this.m_oOverlay.CheckPoint(_x4, _y4);
    },
    CorrectOverlayBounds : function()
    {
        this.m_oOverlay.SetBaseTransform();

        this.m_oOverlay.min_x -= this.MaxEpsLine;
        this.m_oOverlay.min_y -= this.MaxEpsLine;
        this.m_oOverlay.max_x += this.MaxEpsLine;
        this.m_oOverlay.max_y += this.MaxEpsLine;
    },

    SetCurrentPage : function(nPageIndex)
    {
        if (nPageIndex == this.PageIndex)
            return;

        var oPage = this.m_oOverlay.m_oHtmlPage.GetDrawingPageInfo(nPageIndex);
        this.PageIndex = nPageIndex;

        var drawPage = oPage.drawingPage;

        this.Graphics = new AscCommon.CGraphics();

        var _scale = this.m_oOverlay.IsRetina? AscCommon.AscBrowser.retinaPixelRatio : 1;

        this.Graphics.init(this.m_oContext, _scale * (drawPage.right - drawPage.left), _scale * (drawPage.bottom - drawPage.top), oPage.width_mm, oPage.height_mm);

        this.Graphics.m_oCoordTransform.tx = _scale * drawPage.left;
        this.Graphics.m_oCoordTransform.ty = _scale * drawPage.top;

        this.Graphics.SetIntegerGrid(false);

        this.Graphics.globalAlpha = 0.5;
        this.m_oContext.globalAlpha = 0.5;
    },

    init2 : function(overlay)
    {
        this.m_oOverlay = overlay;
        this.m_oContext = this.m_oOverlay.m_oContext;
        this.PageIndex = -1;
    },

    SetClip : function(r)
    {
    },
    RemoveClip : function()
    {
    },

    SavePen : function()
    {
        this.Graphics.SavePen();
    },
    RestorePen : function()
    {
        this.Graphics.RestorePen();
    },

    SaveBrush : function()
    {
        this.Graphics.SaveBrush();
    },
    RestoreBrush : function()
    {
        this.Graphics.RestoreBrush();
    },

    SavePenBrush : function()
    {
        this.Graphics.SavePenBrush();
    },
    RestorePenBrush : function()
    {
        this.Graphics.RestorePenBrush();
    },

    SaveGrState : function()
    {
        this.Graphics.SaveGrState();
    },
    RestoreGrState : function()
    {
        this.Graphics.RestoreGrState();
    },

    StartClipPath : function()
    {
        this.Graphics.StartClipPath();
    },

    EndClipPath : function()
    {
        this.Graphics.EndClipPath();
    },

    /*************************************************************************/
    /******************************** TRACKS *********************************/
    /*************************************************************************/
    DrawTrack : function(type, matrix, left, top, width, height, isLine, isCanRotate, isNoMove)
    {
        if (window["Global"] && window["Global"].isOfficeViewer) {
            return;
        }
        
		if (true === isNoMove)
			return;

		var _retina = this.m_oOverlay.IsRetina;

		if (!_retina && this.m_oOverlay.IsCellEditor && AscCommon.AscBrowser.isRetina)
        {
			this.m_oOverlay.IsRetina = true;
            this.m_oOverlay.m_oContext.setTransform(1, 0, 0, 1, 0, 0);

            left    /= AscCommon.AscBrowser.retinaPixelRatio;
            top     /= AscCommon.AscBrowser.retinaPixelRatio;
            width   /= AscCommon.AscBrowser.retinaPixelRatio;
            height  /= AscCommon.AscBrowser.retinaPixelRatio;

            if (matrix)
			{
				matrix.tx /= AscCommon.AscBrowser.retinaPixelRatio;
				matrix.ty /= AscCommon.AscBrowser.retinaPixelRatio;
			}

			this.m_oOverlay.m_oContext.translate(this.Graphics.m_oCoordTransform.tx, this.Graphics.m_oCoordTransform.ty);
            this.m_oOverlay.m_oContext.scale(AscCommon.AscBrowser.retinaPixelRatio, AscCommon.AscBrowser.retinaPixelRatio);
			this.m_oOverlay.m_oContext.translate(-this.Graphics.m_oCoordTransform.tx, -this.Graphics.m_oCoordTransform.ty);
        }

        // с самого начала нужно понять, есть ли поворот. Потому что если его нет, то можно
        // (и нужно!) рисовать все по-умному
        var overlay = this.m_oOverlay;
        overlay.Show();

        var bIsClever = false;
        this.CurrentPageInfo = overlay.m_oHtmlPage.GetDrawingPageInfo(this.PageIndex);

        var drPage = this.CurrentPageInfo.drawingPage;

        var xDst = drPage.left;
        var yDst = drPage.top;
        var wDst = drPage.right - drPage.left;
        var hDst = drPage.bottom - drPage.top;

        var dKoefX = wDst / this.CurrentPageInfo.width_mm;
        var dKoefY = hDst / this.CurrentPageInfo.height_mm;

        var r = left + width;
        var b = top + height;

        // (x1,y1) --------- (x2,y2)
        //    |                 |
        //    |                 |
        // (x3,y3) --------- (x4,y4)

        var dx1 = xDst + dKoefX * (matrix.TransformPointX(left, top));
        var dy1 = yDst + dKoefY * (matrix.TransformPointY(left, top));

        var dx2 = xDst + dKoefX * (matrix.TransformPointX(r, top));
        var dy2 = yDst + dKoefY * (matrix.TransformPointY(r, top));

        var dx3 = xDst + dKoefX * (matrix.TransformPointX(left, b));
        var dy3 = yDst + dKoefY * (matrix.TransformPointY(left, b));

        var dx4 = xDst + dKoefX * (matrix.TransformPointX(r, b));
        var dy4 = yDst + dKoefY * (matrix.TransformPointY(r, b));

        var x1 = dx1 >> 0;
        var y1 = dy1 >> 0;

        var x2 = dx2 >> 0;
        var y2 = dy2 >> 0;

        var x3 = dx3 >> 0;
        var y3 = dy3 >> 0;

        var x4 = dx4 >> 0;
        var y4 = dy4 >> 0;

        var _eps = 0.001;
        if (Math.abs(dx1 - dx3) < _eps &&
            Math.abs(dx2 - dx4) < _eps &&
            Math.abs(dy1 - dy2) < _eps &&
            Math.abs(dy3 - dy4) < _eps &&
            x1 < x2 && y1 < y3)
        {
            x3 = x1;
            x4 = x2;
            y2 = y1;
            y4 = y3;
            bIsClever = true;
        }

        var nIsCleverWithTransform = bIsClever;
        var nType = 0;
        if (!nIsCleverWithTransform &&
            Math.abs(dx1 - dx3) < _eps &&
            Math.abs(dx2 - dx4) < _eps &&
            Math.abs(dy1 - dy2) < _eps &&
            Math.abs(dy3 - dy4) < _eps)
        {
            x3 = x1;
            x4 = x2;
            y2 = y1;
            y4 = y3;
            nIsCleverWithTransform = true;
            nType = 1;
        }
        if (!nIsCleverWithTransform &&
            Math.abs(dx1 - dx2) < _eps &&
            Math.abs(dx3 - dx4) < _eps &&
            Math.abs(dy1 - dy3) < _eps &&
            Math.abs(dy2 - dy4) < _eps)
        {
            x2 = x1;
            x4 = x3;
            y3 = y1;
            y4 = y2;
            nIsCleverWithTransform = true;
            nType = 2;
        }

        /*
        if (x1 == x3 && x2 == x4 && y1 == y2 && y3 == y4 && x1 < x2 && y1 < y3)
            bIsClever = true;

        var nIsCleverWithTransform = bIsClever;
        var nType = 0;
        if (!nIsCleverWithTransform && x1 == x3 && x2 == x4 && y1 == y2 && y3 == y4)
        {
            nIsCleverWithTransform = true;
            nType = 1;
        }
        if (!nIsCleverWithTransform && x1 == x2 && x3 == x4 && y1 == y3 && y2 == y4)
        {
            nIsCleverWithTransform = true;
            nType = 2;
        }
        */

        var ctx = overlay.m_oContext;

        var bIsEllipceCorner = false;
        //var _style_blue = "#4D7399";
        //var _style_blue = "#B2B2B2";
        var _style_blue = "#29B6F6";
        var _style_green = "#29B6F6";
        var _style_white = "#29B6F6";

        var _len_x = Math.sqrt((x1 - x2)*(x1 - x2) + (y1 - y2)*(y1 - y2));
        var _len_y = Math.sqrt((x1 - x3)*(x1 - x3) + (y1 - y3)*(y1 - y3));

        if (_len_x < 1)
            _len_x = 1;
        if (_len_y < 1)
            _len_y = 1;

        var bIsRectsTrackX = (_len_x >= 30) ? true : false;
        var bIsRectsTrackY = (_len_y >= 30) ? true : false;
        var bIsRectsTrack = (bIsRectsTrackX || bIsRectsTrackY) ? true : false;

        if (bIsRectsTrack && (type == AscFormat.TYPE_TRACK.CHART_TEXT))
            bIsRectsTrack = false;

		if (nType == 2)
		{
			var _tmp = bIsRectsTrackX;
			bIsRectsTrackX = bIsRectsTrackY;
			bIsRectsTrackY = _tmp;
		}

        ctx.lineWidth = 1;
        ctx.beginPath();

        var _oldGlobalAlpha = ctx.globalAlpha;
        ctx.globalAlpha = 1;

        switch (type)
        {
            case AscFormat.TYPE_TRACK.SHAPE:
            case AscFormat.TYPE_TRACK.GROUP:
            case AscFormat.TYPE_TRACK.CHART_TEXT:
            {
                if (bIsClever)
                {
                    overlay.CheckRect(x1, y1, x4 - x1, y4 - y1);
                    ctx.strokeStyle = _style_blue;

                    if (!isLine)
                    {
                        ctx.rect(x1 + 0.5, y2 + 0.5, x4 - x1, y4 - y1);
                        ctx.stroke();
                        ctx.beginPath();
                    }

                    var xC = ((x1 + x2) / 2) >> 0;

                    if (!isLine && isCanRotate)
                    {
                        if (!bIsUseImageRotateTrack)
                        {
                            ctx.beginPath();
                            overlay.AddEllipse(xC, y1 - TRACK_DISTANCE_ROTATE, TRACK_CIRCLE_RADIUS);

                            ctx.fillStyle = _style_green;
                            ctx.fill();
                            ctx.stroke();
                        }
                        else
                        {
                            var _image_track_rotate = overlay.GetImageTrackRotationImage();
                            if (_image_track_rotate.asc_complete)
                            {
                                var _w = IMAGE_ROTATE_TRACK_W;
                                var _xI = (xC + 0.5 - _w / 2) >> 0;
                                var _yI = y1 - TRACK_DISTANCE_ROTATE - (_w >> 1);

                                overlay.CheckRect(_xI, _yI, _w, _w);
                                ctx.drawImage(_image_track_rotate, _xI, _yI, _w, _w);
                            }
                        }

                        ctx.beginPath();
                        ctx.moveTo(xC + 0.5, y1);
                        ctx.lineTo(xC + 0.5, y1 - TRACK_DISTANCE_ROTATE2);
                        ctx.stroke();

                        ctx.beginPath();
                    }

                    ctx.fillStyle = (type != AscFormat.TYPE_TRACK.CHART_TEXT) ? _style_white : _style_blue;
                    var TRACK_RECT_SIZE_CUR = (type != AscFormat.TYPE_TRACK.CHART_TEXT) ? TRACK_RECT_SIZE : TRACK_RECT_SIZE_CT;
                    if (type == AscFormat.TYPE_TRACK.CHART_TEXT)
                        ctx.strokeStyle = _style_white;

                    if (bIsEllipceCorner)
                    {
                        overlay.AddEllipse(x1, y1, TRACK_CIRCLE_RADIUS);
                        if (!isLine)
                        {
                            overlay.AddEllipse(x2, y2, TRACK_CIRCLE_RADIUS);
                            overlay.AddEllipse(x3, y3, TRACK_CIRCLE_RADIUS);
                        }
                        overlay.AddEllipse(x4, y4, TRACK_CIRCLE_RADIUS);
                    }
                    else
                    {
                        overlay.AddRect2(x1 + 0.5, y1 + 0.5, TRACK_RECT_SIZE_CUR);
                        if (!isLine)
                        {
                            overlay.AddRect2(x2 + 0.5, y2 + 0.5, TRACK_RECT_SIZE_CUR);
                            overlay.AddRect2(x3 + 0.5, y3 + 0.5, TRACK_RECT_SIZE_CUR);
                        }
                        overlay.AddRect2(x4 + 0.5, y4 + 0.5, TRACK_RECT_SIZE_CUR);
                    }

                    if (bIsRectsTrack && !isLine)
                    {
                        var _xC = (((x1 + x2) / 2) >> 0) + 0.5;
                        var _yC = (((y1 + y3) / 2) >> 0) + 0.5;

                        if (bIsRectsTrackX)
                        {
                            overlay.AddRect2(_xC, y1+0.5, TRACK_RECT_SIZE);
                            overlay.AddRect2(_xC, y3+0.5, TRACK_RECT_SIZE);
                        }

                        if (bIsRectsTrackY)
                        {
                            overlay.AddRect2(x2+0.5, _yC, TRACK_RECT_SIZE);
                            overlay.AddRect2(x1+0.5, _yC, TRACK_RECT_SIZE);
                        }
                    }

                    ctx.fill();
                    ctx.stroke();

                    ctx.beginPath();
                }
                else
                {
					var _x1 = x1;
					var _y1 = y1;
					var _x2 = x2;
					var _y2 = y2;
					var _x3 = x3;
					var _y3 = y3;
					var _x4 = x4;
					var _y4 = y4;

					if (nIsCleverWithTransform)
					{
						var _x1 = x1;
						if (x2 < _x1)
							_x1 = x2;
						if (x3 < _x1)
							_x1 = x3;
						if (x4 < _x1)
							_x1 = x4;

						var _x4 = x1;
						if (x2 > _x4)
							_x4 = x2;
						if (x3 > _x4)
							_x4 = x3;
						if (x4 > _x4)
							_x4 = x4;

						var _y1 = y1;
						if (y2 < _y1)
							_y1 = y2;
						if (y3 < _y1)
							_y1 = y3;
						if (y4 < _y1)
							_y1 = y4;

						var _y4 = y1;
						if (y2 > _y4)
							_y4 = y2;
						if (y3 > _y4)
							_y4 = y3;
						if (y4 > _y4)
							_y4 = y4;

						_x2 = _x4;
						_y2 = _y1;
						_x3 = _x1;
						_y3 = _y4;
					}

                    ctx.strokeStyle = _style_blue;

                    if (!isLine)
                    {
                        if (nIsCleverWithTransform)
                        {
                            ctx.rect(_x1 + 0.5, _y2 + 0.5, _x4 - _x1, _y4 - _y1);
                            ctx.stroke();
                            ctx.beginPath();
                        }
                        else
                        {
                            ctx.moveTo(x1, y1);
                            ctx.lineTo(x2, y2);
                            ctx.lineTo(x4, y4);
                            ctx.lineTo(x3, y3);
                            ctx.closePath();
                            ctx.stroke();
                        }
                    }

                    overlay.CheckPoint(x1, y1);
                    overlay.CheckPoint(x2, y2);
                    overlay.CheckPoint(x3, y3);
                    overlay.CheckPoint(x4, y4);

                    var ex1 = (x2 - x1) / _len_x;
                    var ey1 = (y2 - y1) / _len_x;
                    var ex2 = (x1 - x3) / _len_y;
                    var ey2 = (y1 - y3) / _len_y;

                    var _bAbsX1 = Math.abs(ex1) < 0.01;
                    var _bAbsY1 = Math.abs(ey1) < 0.01;
                    var _bAbsX2 = Math.abs(ex2) < 0.01;
                    var _bAbsY2 = Math.abs(ey2) < 0.01;

                    if (_bAbsX2 && _bAbsY2)
                    {
                        if (_bAbsX1 && _bAbsY1)
                        {
                            ex1 = 1;
                            ey1 = 0;
                            ex2 = 0;
                            ey2 = 1;
                        }
                        else
                        {
                            ex2 = -ey1;
                            ey2 = ex1;
                        }
                    }
                    else if (_bAbsX1 && _bAbsY1)
                    {
                        ex1 = ey2;
                        ey1 = -ex2;
                    }

                    var xc1 = (x1 + x2) / 2;
                    var yc1 = (y1 + y2) / 2;

                    ctx.beginPath();

                    if (!isLine && isCanRotate)
                    {
                        if (!bIsUseImageRotateTrack)
                        {
                            ctx.beginPath();
                            overlay.AddEllipse(xc1 + ex2 * TRACK_DISTANCE_ROTATE, yc1 + ey2 * TRACK_DISTANCE_ROTATE, TRACK_CIRCLE_RADIUS);

                            ctx.fillStyle = _style_green;
                            ctx.fill();
                            ctx.stroke();
                        }
                        else
                        {
                            var _image_track_rotate = overlay.GetImageTrackRotationImage();
                            if (_image_track_rotate.asc_complete)
                            {
                                var _xI = xc1 + ex2 * TRACK_DISTANCE_ROTATE;
                                var _yI = yc1 + ey2 * TRACK_DISTANCE_ROTATE;
                                var _w = IMAGE_ROTATE_TRACK_W;
                                var _w2 = IMAGE_ROTATE_TRACK_W / 2;

								if (nIsCleverWithTransform)
								{
									_xI >>= 0;
									_yI >>= 0;
									_w2 >>= 0;
									_w2 += 1;
								}

								//ctx.setTransform(ex1, ey1, -ey1, ex1, _xI, _yI);

								var _matrix = matrix.CreateDublicate();
								_matrix.tx = 0;
								_matrix.ty = 0;
								var _xx = _matrix.TransformPointX(0, 1);
								var _yy = _matrix.TransformPointY(0, 1);
								var _angle = Math.atan2(_xx, -_yy) - Math.PI;
								var _px = Math.cos(_angle);
								var _py = Math.sin(_angle);

								ctx.save();

								ctx.translate(_xI, _yI);
								ctx.transform(_px, _py, -_py, _px, 0, 0);
                                ctx.drawImage(_image_track_rotate, -_w2, -_w2, _w, _w);

                                ctx.restore();

                                overlay.CheckRect(_xI - _w2, _yI - _w2, _w, _w);
                            }
                        }

                        ctx.beginPath();

						if (!nIsCleverWithTransform)
						{
							ctx.moveTo(xc1, yc1);
							ctx.lineTo(xc1 + ex2 * TRACK_DISTANCE_ROTATE2, yc1 + ey2 * TRACK_DISTANCE_ROTATE2);
						}
						else
						{
							ctx.moveTo((xc1 >> 0) + 0.5, (yc1 >> 0) + 0.5);
							ctx.lineTo(((xc1 + ex2 * TRACK_DISTANCE_ROTATE2) >> 0) + 0.5, ((yc1 + ey2 * TRACK_DISTANCE_ROTATE2) >> 0) + 0.5);
						}

                        ctx.stroke();

                        ctx.beginPath();
                    }

                    ctx.fillStyle = (type != AscFormat.TYPE_TRACK.CHART_TEXT) ? _style_white : _style_blue;
                    var TRACK_RECT_SIZE_CUR = (type != AscFormat.TYPE_TRACK.CHART_TEXT) ? TRACK_RECT_SIZE : TRACK_RECT_SIZE_CT;
                    if (type == AscFormat.TYPE_TRACK.CHART_TEXT)
                        ctx.strokeStyle = _style_white;

					if (!nIsCleverWithTransform)
					{
						if (bIsEllipceCorner)
						{
							overlay.AddEllipse(x1, y1, TRACK_CIRCLE_RADIUS);
							if (!isLine)
							{
								overlay.AddEllipse(x2, y2, TRACK_CIRCLE_RADIUS);
								overlay.AddEllipse(x3, y3, TRACK_CIRCLE_RADIUS);
							}
							overlay.AddEllipse(x4, y4, TRACK_CIRCLE_RADIUS);
						}
						else
						{
							overlay.AddRect3(x1, y1, TRACK_RECT_SIZE_CUR, ex1, ey1, ex2, ey2);
							if (!isLine)
							{
								overlay.AddRect3(x2, y2, TRACK_RECT_SIZE_CUR, ex1, ey1, ex2, ey2);
								overlay.AddRect3(x3, y3, TRACK_RECT_SIZE_CUR, ex1, ey1, ex2, ey2);
							}
							overlay.AddRect3(x4, y4, TRACK_RECT_SIZE_CUR, ex1, ey1, ex2, ey2);
						}
					}
					else
					{
						if (bIsEllipceCorner)
						{
							overlay.AddEllipse(_x1, _y1, TRACK_CIRCLE_RADIUS);
							if (!isLine)
							{
								overlay.AddEllipse(_x2, _y2, TRACK_CIRCLE_RADIUS);
								overlay.AddEllipse(_x3, _y3, TRACK_CIRCLE_RADIUS);
							}
							overlay.AddEllipse(_x4, _y4, TRACK_CIRCLE_RADIUS);
						}
						else
						{
                            if (!isLine)
                            {
                                overlay.AddRect2(_x1 + 0.5, _y1 + 0.5, TRACK_RECT_SIZE_CUR);
                                overlay.AddRect2(_x2 + 0.5, _y2 + 0.5, TRACK_RECT_SIZE_CUR);
                                overlay.AddRect2(_x3 + 0.5, _y3 + 0.5, TRACK_RECT_SIZE_CUR);
                                overlay.AddRect2(_x4 + 0.5, _y4 + 0.5, TRACK_RECT_SIZE_CUR);
                            }
                            else
                            {
                                overlay.AddRect2(x1 + 0.5, y1 + 0.5, TRACK_RECT_SIZE_CUR);
                                overlay.AddRect2(x4 + 0.5, y4 + 0.5, TRACK_RECT_SIZE_CUR);
                            }
						}
					}

                    if (!isLine)
                    {
                        if (!nIsCleverWithTransform)
                        {
                            if (bIsRectsTrack)
                            {
                                if (bIsRectsTrackX)
                                {
                                    overlay.AddRect3((x1 + x2) / 2, (y1 + y2) / 2, TRACK_RECT_SIZE, ex1, ey1, ex2, ey2);
                                    overlay.AddRect3((x3 + x4) / 2, (y3 + y4) / 2, TRACK_RECT_SIZE, ex1, ey1, ex2, ey2);
                                }
                                if (bIsRectsTrackY)
                                {
                                    overlay.AddRect3((x2 + x4) / 2, (y2 + y4) / 2, TRACK_RECT_SIZE, ex1, ey1, ex2, ey2);
                                    overlay.AddRect3((x3 + x1) / 2, (y3 + y1) / 2, TRACK_RECT_SIZE, ex1, ey1, ex2, ey2);
                                }
                            }
                        }
                        else
                        {
                            var _xC = (((_x1 + _x2) / 2) >> 0) + 0.5;
                            var _yC = (((_y1 + _y3) / 2) >> 0) + 0.5;

                            if (bIsRectsTrackX)
                            {
                                overlay.AddRect2(_xC, _y1+0.5, TRACK_RECT_SIZE);
                                overlay.AddRect2(_xC, _y3+0.5, TRACK_RECT_SIZE);
                            }

                            if (bIsRectsTrackY)
                            {
                                overlay.AddRect2(_x2+0.5, _yC, TRACK_RECT_SIZE);
                                overlay.AddRect2(_x1+0.5, _yC, TRACK_RECT_SIZE);
                            }
                        }
                    }

                    ctx.fill();
                    ctx.stroke();

                    ctx.beginPath();
                }

                break;
            }
            case AscFormat.TYPE_TRACK.TEXT:
            case AscFormat.TYPE_TRACK.GROUP_PASSIVE:
            {
                if (bIsClever)
                {
                    overlay.CheckRect(x1, y1, x4 - x1, y4 - y1);
                    ctx.strokeStyle = _style_blue;

                    this.AddRectDashClever(ctx, x1, y1, x4, y4, 8, 3, true);

                    ctx.beginPath();

                    if (isCanRotate)
                    {
                        var xC = ((x1 + x2) / 2) >> 0;

                        if (!bIsUseImageRotateTrack)
                        {
                            ctx.beginPath();
                            overlay.AddEllipse(xC, y1 - TRACK_DISTANCE_ROTATE, TRACK_CIRCLE_RADIUS);

                            ctx.fillStyle = _style_green;
                            ctx.fill();
                            ctx.stroke();
                        }
                        else
                        {
                            var _image_track_rotate = overlay.GetImageTrackRotationImage();
                            if (_image_track_rotate.asc_complete)
                            {
                                var _w = IMAGE_ROTATE_TRACK_W;
                                var _xI = (xC + 0.5 - _w / 2) >> 0;
                                var _yI = y1 - TRACK_DISTANCE_ROTATE - (_w >> 1);

                                overlay.CheckRect(_xI, _yI, _w, _w);
                                ctx.drawImage(_image_track_rotate, _xI, _yI, _w, _w);
                            }
                        }

                        ctx.beginPath();

                        ctx.moveTo(xC + 0.5, y1);
                        ctx.lineTo(xC + 0.5, y1 - TRACK_DISTANCE_ROTATE2);
                        ctx.stroke();

                        ctx.beginPath();
                    }

                    ctx.fillStyle = _style_white;

                    if (bIsEllipceCorner)
                    {
                        overlay.AddEllipse(x1, y1, TRACK_CIRCLE_RADIUS);
                        overlay.AddEllipse(x2, y2, TRACK_CIRCLE_RADIUS);
                        overlay.AddEllipse(x3, y3, TRACK_CIRCLE_RADIUS);
                        overlay.AddEllipse(x4, y4, TRACK_CIRCLE_RADIUS);
                    }
                    else
                    {
                        overlay.AddRect2(x1 + 0.5, y1 + 0.5, TRACK_RECT_SIZE);
                        overlay.AddRect2(x2 + 0.5, y2 + 0.5, TRACK_RECT_SIZE);
                        overlay.AddRect2(x3 + 0.5, y3 + 0.5, TRACK_RECT_SIZE);
                        overlay.AddRect2(x4 + 0.5, y4 + 0.5, TRACK_RECT_SIZE);
                    }

                    if (bIsRectsTrack)
                    {
                        var _xC = (((x1 + x2) / 2) >> 0) + 0.5;
                        var _yC = (((y1 + y3) / 2) >> 0) + 0.5;

                        if (bIsRectsTrackX)
                        {
                            overlay.AddRect2(_xC, y1+0.5, TRACK_RECT_SIZE);
                            overlay.AddRect2(_xC, y3+0.5, TRACK_RECT_SIZE);
                        }
                        if (bIsRectsTrackY)
                        {
                            overlay.AddRect2(x2+0.5, _yC, TRACK_RECT_SIZE);
                            overlay.AddRect2(x1+0.5, _yC, TRACK_RECT_SIZE);
                        }
                    }

                    ctx.fill();
                    ctx.stroke();

                    ctx.beginPath();
                }
                else
                {
					var _x1 = x1;
					var _y1 = y1;
					var _x2 = x2;
					var _y2 = y2;
					var _x3 = x3;
					var _y3 = y3;
					var _x4 = x4;
					var _y4 = y4;

					if (nIsCleverWithTransform)
					{
						var _x1 = x1;
						if (x2 < _x1)
							_x1 = x2;
						if (x3 < _x1)
							_x1 = x3;
						if (x4 < _x1)
							_x1 = x4;

						var _x4 = x1;
						if (x2 > _x4)
							_x4 = x2;
						if (x3 > _x4)
							_x4 = x3;
						if (x4 > _x4)
							_x4 = x4;

						var _y1 = y1;
						if (y2 < _y1)
							_y1 = y2;
						if (y3 < _y1)
							_y1 = y3;
						if (y4 < _y1)
							_y1 = y4;

						var _y4 = y1;
						if (y2 > _y4)
							_y4 = y2;
						if (y3 > _y4)
							_y4 = y3;
						if (y4 > _y4)
							_y4 = y4;

						_x2 = _x4;
						_y2 = _y1;
						_x3 = _x1;
						_y3 = _y4;
					}

                    overlay.CheckPoint(x1, y1);
                    overlay.CheckPoint(x2, y2);
                    overlay.CheckPoint(x3, y3);
                    overlay.CheckPoint(x4, y4);

                    ctx.strokeStyle = _style_blue;
					if (!nIsCleverWithTransform)
					{
						this.AddRectDash(ctx, x1, y1, x2, y2, x3, y3, x4, y4, 8, 3, true);
					}
					else
					{
						this.AddRectDashClever(ctx, _x1, _y1, _x4, _y4, 8, 3, true);
					}

                    var ex1 = (x2 - x1) / _len_x;
                    var ey1 = (y2 - y1) / _len_x;
                    var ex2 = (x1 - x3) / _len_y;
                    var ey2 = (y1 - y3) / _len_y;

                    var _bAbsX1 = Math.abs(ex1) < 0.01;
                    var _bAbsY1 = Math.abs(ey1) < 0.01;
                    var _bAbsX2 = Math.abs(ex2) < 0.01;
                    var _bAbsY2 = Math.abs(ey2) < 0.01;

                    if (_bAbsX2 && _bAbsY2)
                    {
                        if (_bAbsX1 && _bAbsY1)
                        {
                            ex1 = 1;
                            ey1 = 0;
                            ex2 = 0;
                            ey2 = 1;
                        }
                        else
                        {
                            ex2 = -ey1;
                            ey2 = ex1;
                        }
                    }
                    else if (_bAbsX1 && _bAbsY1)
                    {
                        ex1 = ey2;
                        ey1 = -ex2;
                    }

                    var xc1 = (x1 + x2) / 2;
                    var yc1 = (y1 + y2) / 2;

                    ctx.beginPath();

                    if (isCanRotate)
                    {
                        if (!bIsUseImageRotateTrack)
                        {
                            ctx.beginPath();
                            overlay.AddEllipse(xc1 + ex2 * TRACK_DISTANCE_ROTATE, yc1 + ey2 * TRACK_DISTANCE_ROTATE, TRACK_CIRCLE_RADIUS);

                            ctx.fillStyle = _style_green;
                            ctx.fill();
                            ctx.stroke();
                        }
                        else
                        {
                            var _image_track_rotate = overlay.GetImageTrackRotationImage();
                            if (_image_track_rotate.asc_complete)
                            {
                                var _xI = xc1 + ex2 * TRACK_DISTANCE_ROTATE;
                                var _yI = yc1 + ey2 * TRACK_DISTANCE_ROTATE;
                                var _w = IMAGE_ROTATE_TRACK_W;
                                var _w2 = IMAGE_ROTATE_TRACK_W / 2;

								if (nIsCleverWithTransform)
								{
									_xI >>= 0;
									_yI >>= 0;
									_w2 >>= 0;
									_w2 += 1;
								}

								//ctx.setTransform(ex1, ey1, -ey1, ex1, _xI, _yI);

								var _matrix = matrix.CreateDublicate();
								_matrix.tx = 0;
								_matrix.ty = 0;
								var _xx = _matrix.TransformPointX(0, 1);
								var _yy = _matrix.TransformPointY(0, 1);
								var _angle = Math.atan2(_xx, -_yy) - Math.PI;
								var _px = Math.cos(_angle);
								var _py = Math.sin(_angle);

								ctx.save();

								ctx.translate(_xI, _yI);
								ctx.transform(_px, _py, -_py, _px, 0, 0);
								ctx.drawImage(_image_track_rotate, -_w2, -_w2, _w, _w);

                                ctx.restore();

                                overlay.CheckRect(_xI - _w2, _yI - _w2, _w, _w);
                            }
                        }

                        ctx.beginPath();

						if (!nIsCleverWithTransform)
						{
							ctx.moveTo(xc1, yc1);
							ctx.lineTo(xc1 + ex2 * TRACK_DISTANCE_ROTATE2, yc1 + ey2 * TRACK_DISTANCE_ROTATE2);
						}
						else
						{
							ctx.moveTo((xc1 >> 0) + 0.5, (yc1 >> 0) + 0.5);
							ctx.lineTo(((xc1 + ex2 * TRACK_DISTANCE_ROTATE2) >> 0) + 0.5, ((yc1 + ey2 * TRACK_DISTANCE_ROTATE2) >> 0) + 0.5);
						}

                        ctx.stroke();

                        ctx.beginPath();

                    }

                    ctx.fillStyle = _style_white;

					if (!nIsCleverWithTransform)
					{
						if (bIsEllipceCorner)
						{
							overlay.AddEllipse(x1, y1, TRACK_CIRCLE_RADIUS);
							overlay.AddEllipse(x2, y2, TRACK_CIRCLE_RADIUS);
							overlay.AddEllipse(x3, y3, TRACK_CIRCLE_RADIUS);
							overlay.AddEllipse(x4, y4, TRACK_CIRCLE_RADIUS);
						}
						else
						{
							overlay.AddRect3(x1, y1, TRACK_RECT_SIZE, ex1, ey1, ex2, ey2);
							overlay.AddRect3(x2, y2, TRACK_RECT_SIZE, ex1, ey1, ex2, ey2);
							overlay.AddRect3(x3, y3, TRACK_RECT_SIZE, ex1, ey1, ex2, ey2);
							overlay.AddRect3(x4, y4, TRACK_RECT_SIZE, ex1, ey1, ex2, ey2);
						}
					}
					else
					{
						if (bIsEllipceCorner)
						{
							overlay.AddEllipse(x1, y1, TRACK_CIRCLE_RADIUS);
							overlay.AddEllipse(x2, y2, TRACK_CIRCLE_RADIUS);
							overlay.AddEllipse(x3, y3, TRACK_CIRCLE_RADIUS);
							overlay.AddEllipse(x4, y4, TRACK_CIRCLE_RADIUS);
						}
						else
						{
							overlay.AddRect2(_x1 + 0.5, _y1 + 0.5, TRACK_RECT_SIZE);
							overlay.AddRect2(_x2 + 0.5, _y2 + 0.5, TRACK_RECT_SIZE);
							overlay.AddRect2(_x3 + 0.5, _y3 + 0.5, TRACK_RECT_SIZE);
							overlay.AddRect2(_x4 + 0.5, _y4 + 0.5, TRACK_RECT_SIZE);
						}
					}

					if (!nIsCleverWithTransform)
					{
						if (bIsRectsTrack)
						{
							if (bIsRectsTrackX)
							{
								overlay.AddRect3((x1 + x2) / 2, (y1 + y2) / 2, TRACK_RECT_SIZE, ex1, ey1, ex2, ey2);
								overlay.AddRect3((x3 + x4) / 2, (y3 + y4) / 2, TRACK_RECT_SIZE, ex1, ey1, ex2, ey2);
							}
							if (bIsRectsTrackY)
							{
								overlay.AddRect3((x2 + x4) / 2, (y2 + y4) / 2, TRACK_RECT_SIZE, ex1, ey1, ex2, ey2);
								overlay.AddRect3((x3 + x1) / 2, (y3 + y1) / 2, TRACK_RECT_SIZE, ex1, ey1, ex2, ey2);
							}
						}
					}
					else
					{
						if (bIsRectsTrack)
						{
							var _xC = (((_x1 + _x2) / 2) >> 0) + 0.5;
							var _yC = (((_y1 + _y3) / 2) >> 0) + 0.5;

							if (bIsRectsTrackX)
							{
								overlay.AddRect2(_xC, _y1+0.5, TRACK_RECT_SIZE);
								overlay.AddRect2(_xC, _y3+0.5, TRACK_RECT_SIZE);
							}
							if (bIsRectsTrackY)
							{
								overlay.AddRect2(_x2+0.5, _yC, TRACK_RECT_SIZE);
								overlay.AddRect2(_x1+0.5, _yC, TRACK_RECT_SIZE);
							}
						}
					}

                    ctx.fill();
                    ctx.stroke();

                    ctx.beginPath();
                }

                break;
            }
            case AscFormat.TYPE_TRACK.EMPTY_PH:
            {
                if (bIsClever)
                {
                    overlay.CheckRect(x1, y1, x4 - x1, y4 - y1);
                    ctx.rect(x1 + 0.5, y2 + 0.5, x4 - x1 + 1, y4 - y1);
                    ctx.fillStyle = _style_white;
                    ctx.stroke();

                    ctx.beginPath();

                    ctx.strokeStyle = _style_blue;
                    this.AddRectDashClever(ctx, x1, y1, x4, y4, 8, 3, true);

                    ctx.beginPath();

                    var xC = ((x1 + x2) / 2) >> 0;

                    if (!bIsUseImageRotateTrack)
                    {
                        ctx.beginPath();
                        overlay.AddEllipse(xC, y1 - TRACK_DISTANCE_ROTATE);

                        ctx.fillStyle = _style_green;
                        ctx.fill();
                        ctx.stroke();
                    }
                    else
                    {
                        var _image_track_rotate = overlay.GetImageTrackRotationImage();
                        if (_image_track_rotate.asc_complete)
                        {
                            var _w = IMAGE_ROTATE_TRACK_W;
                            var _xI = (xC + 0.5 - _w / 2) >> 0;
                            var _yI = y1 - TRACK_DISTANCE_ROTATE - (_w >> 1);

                            overlay.CheckRect(_xI, _yI, _w, _w);
                            ctx.drawImage(_image_track_rotate, _xI, _yI, _w, _w);
                        }
                    }

                    ctx.beginPath();
                    ctx.moveTo(xC + 0.5, y1);
                    ctx.lineTo(xC + 0.5, y1 - TRACK_DISTANCE_ROTATE2);
                    ctx.stroke();

                    ctx.beginPath();

                    ctx.fillStyle = _style_white;

                    if (bIsEllipceCorner)
                    {
                        overlay.AddEllipse(x1, y1, TRACK_CIRCLE_RADIUS);
                        overlay.AddEllipse(x2, y2, TRACK_CIRCLE_RADIUS);
                        overlay.AddEllipse(x3, y3, TRACK_CIRCLE_RADIUS);
                        overlay.AddEllipse(x4, y4, TRACK_CIRCLE_RADIUS);
                    }
                    else
                    {
                        overlay.AddRect2(x1 + 0.5, y1 + 0.5, TRACK_RECT_SIZE);
                        overlay.AddRect2(x2 + 0.5, y2 + 0.5, TRACK_RECT_SIZE);
                        overlay.AddRect2(x3 + 0.5, y3 + 0.5, TRACK_RECT_SIZE);
                        overlay.AddRect2(x4 + 0.5, y4 + 0.5, TRACK_RECT_SIZE);
                    }

                    if (bIsRectsTrack && false)
                    {
                        var _xC = (((x1 + x2) / 2) >> 0) + 0.5;
                        var _yC = (((y1 + y3) / 2) >> 0) + 0.5;

                        overlay.AddRect2(_xC, y1+0.5, TRACK_RECT_SIZE);
                        overlay.AddRect2(x2+0.5, _yC, TRACK_RECT_SIZE);
                        overlay.AddRect2(_xC, y3+0.5, TRACK_RECT_SIZE);
                        overlay.AddRect2(x1+0.5, _yC, TRACK_RECT_SIZE);
                    }

                    ctx.fill();
                    ctx.stroke();

                    ctx.beginPath();
                }
                else
                {
                    overlay.CheckPoint(x1, y1);
                    overlay.CheckPoint(x2, y2);
                    overlay.CheckPoint(x3, y3);
                    overlay.CheckPoint(x4, y4);

                    ctx.moveTo(x1, y1);
                    ctx.lineTo(x2, y2);
                    ctx.lineTo(x3, y3);
                    ctx.lineTo(x4, y4);
                    ctx.closePath();

                    overlay.CheckPoint(x1, y1);
                    overlay.CheckPoint(x2, y2);
                    overlay.CheckPoint(x3, y3);
                    overlay.CheckPoint(x4, y4);

                    ctx.strokeStyle = _style_white;
                    ctx.stroke();

                    ctx.beginPath();

					ctx.strokeStyle = _style_blue;
                    this.AddRectDash(ctx, x1, y1, x2, y2, x3, y3, x4, y4, 8, 3, true);

                    ctx.beginPath();

                    var ex1 = (x2 - x1) / _len_x;
                    var ey1 = (y2 - y1) / _len_x;
                    var ex2 = (x1 - x3) / _len_y;
                    var ey2 = (y1 - y3) / _len_y;

                    var _bAbsX1 = Math.abs(ex1) < 0.01;
                    var _bAbsY1 = Math.abs(ey1) < 0.01;
                    var _bAbsX2 = Math.abs(ex2) < 0.01;
                    var _bAbsY2 = Math.abs(ey2) < 0.01;

                    if (_bAbsX2 && _bAbsY2)
                    {
                        if (_bAbsX1 && _bAbsY1)
                        {
                            ex1 = 1;
                            ey1 = 0;
                            ex2 = 0;
                            ey2 = 1;
                        }
                        else
                        {
                            ex2 = -ey1;
                            ey2 = ex1;
                        }
                    }
                    else if (_bAbsX1 && _bAbsY1)
                    {
                        ex1 = ey2;
                        ey1 = -ex2;
                    }

                    var xc1 = (x1 + x2) / 2;
                    var yc1 = (y1 + y2) / 2;

                    ctx.beginPath();

                    if (!bIsUseImageRotateTrack)
                    {
                        ctx.beginPath();
                        overlay.AddEllipse(xc1 + ex2 * TRACK_DISTANCE_ROTATE, yc1 + ey2 * TRACK_DISTANCE_ROTATE, TRACK_DISTANCE_ROTATE);

                        ctx.fillStyle = _style_green;
                        ctx.fill();
                        ctx.stroke();
                    }
                    else
                    {
                        var _image_track_rotate = overlay.GetImageTrackRotationImage();
                        if (_image_track_rotate.asc_complete)
                        {
                            var _xI = xc1 + ex2 * TRACK_DISTANCE_ROTATE;
                            var _yI = yc1 + ey2 * TRACK_DISTANCE_ROTATE;
                            var _w = IMAGE_ROTATE_TRACK_W;
                            var _w2 = IMAGE_ROTATE_TRACK_W / 2;

                            ctx.save();

                            overlay.transform(ex1, ey1, -ey1, ex1, _xI, _yI);
                            ctx.drawImage(_image_track_rotate, -_w2, -_w2, _w, _w);
                            overlay.SetBaseTransform();

                            ctx.restore();

                            overlay.CheckRect(_xI - _w2, _yI - _w2, _w, _w);
                        }
                    }

                    ctx.beginPath();
                    ctx.moveTo(xc1, yc1);
                    ctx.lineTo(xc1 + ex2 * TRACK_DISTANCE_ROTATE2, yc1 + ey2 * TRACK_DISTANCE_ROTATE2);
                    ctx.stroke();

                    ctx.beginPath();

                    ctx.fillStyle = _style_white;

                    if (bIsEllipceCorner)
                    {
                        overlay.AddEllipse(x1, y1, TRACK_CIRCLE_RADIUS);
                        overlay.AddEllipse(x2, y2, TRACK_CIRCLE_RADIUS);
                        overlay.AddEllipse(x3, y3, TRACK_CIRCLE_RADIUS);
                        overlay.AddEllipse(x4, y4, TRACK_CIRCLE_RADIUS);
                    }
                    else
                    {
                        overlay.AddRect3(x1, y1, TRACK_RECT_SIZE, ex1, ey1, ex2, ey2);
                        overlay.AddRect3(x2, y2, TRACK_RECT_SIZE, ex1, ey1, ex2, ey2);
                        overlay.AddRect3(x3, y3, TRACK_RECT_SIZE, ex1, ey1, ex2, ey2);
                        overlay.AddRect3(x4, y4, TRACK_RECT_SIZE, ex1, ey1, ex2, ey2);
                    }

                    if (bIsRectsTrack)
                    {
                        overlay.AddRect3((x1 + x2) / 2, (y1 + y2) / 2, TRACK_RECT_SIZE, ex1, ey1, ex2, ey2);
                        overlay.AddRect3((x2 + x4) / 2, (y2 + y4) / 2, TRACK_RECT_SIZE, ex1, ey1, ex2, ey2);
                        overlay.AddRect3((x3 + x4) / 2, (y3 + y4) / 2, TRACK_RECT_SIZE, ex1, ey1, ex2, ey2);
                        overlay.AddRect3((x3 + x1) / 2, (y3 + y1) / 2, TRACK_RECT_SIZE, ex1, ey1, ex2, ey2);
                    }

                    ctx.fill();
                    ctx.stroke();

                    ctx.beginPath();
                }

                break;
            }

            default:
                break;
        }

        ctx.globalAlpha = _oldGlobalAlpha;

		if (!_retina && this.m_oOverlay.IsCellEditor && AscCommon.AscBrowser.isRetina)
		{
			this.m_oOverlay.IsRetina = false;
			this.m_oOverlay.SetBaseTransform();

			if (matrix)
			{
				matrix.tx *= AscCommon.AscBrowser.retinaPixelRatio;
				matrix.ty *= AscCommon.AscBrowser.retinaPixelRatio;
			}
		}
    },

    DrawTrackSelectShapes : function(x, y, w, h)
    {
        if (window["Global"] && window["Global"].isOfficeViewer) {
            return;
        }

        var overlay = this.m_oOverlay;
        overlay.Show();

        this.CurrentPageInfo = overlay.m_oHtmlPage.GetDrawingPageInfo(this.PageIndex);

        var drPage = this.CurrentPageInfo.drawingPage;

        var xDst = drPage.left;
        var yDst = drPage.top;
        var wDst = drPage.right - drPage.left;
        var hDst = drPage.bottom - drPage.top;

        var dKoefX = wDst / this.CurrentPageInfo.width_mm;
        var dKoefY = hDst / this.CurrentPageInfo.height_mm;

        var x1 = (xDst + dKoefX * x) >> 0;
        var y1 = (yDst + dKoefY * y) >> 0;

        var x2 = (xDst + dKoefX * (x + w)) >> 0;
        var y2 = (yDst + dKoefY * (y + h)) >> 0;

        if (x1 > x2)
        {
            var tmp = x1;
            x1 = x2;
            x2 = tmp;
        }
        if (y1 > y2)
        {
            var tmp = y1;
            y1 = y2;
            y2 = tmp;
        }

        overlay.CheckRect(x1, y1, x2 - x1, y2 - y1);
        var ctx = overlay.m_oContext;
        overlay.SetBaseTransform();

        var globalAlphaOld = ctx.globalAlpha;
        ctx.globalAlpha = 0.5;
        ctx.beginPath();
        ctx.fillStyle = "rgba(51,102,204,255)";
        ctx.strokeStyle = "#9ADBFE";
        ctx.lineWidth = 1;
        ctx.fillRect(x1, y1, x2 - x1, y2 - y1);
        ctx.beginPath();
        ctx.strokeRect(x1 - 0.5, y1 - 0.5, x2 - x1 + 1, y2 - y1 + 1);
        ctx.globalAlpha = globalAlphaOld;
    },

    AddRect : function(ctx, x, y, r, b, bIsClever)
    {
        if (bIsClever)
            ctx.rect(x + 0.5, y + 0.5, r - x + 1, b - y + 1);
        else
        {
            ctx.moveTo(x,y);
            ctx.rect(x, y, r - x + 1, b - y + 1);
        }
    },

    AddRectDashClever : function(ctx, x, y, r, b, w_dot, w_dist, bIsStrokeAndCanUseNative)
    {
        var _support_native_dash = (undefined !== ctx.setLineDash);

        // здесь расчитано на толщину линии в один пиксел!
        var _x = x + 0.5;
        var _y = y + 0.5;
        var _r = r + 0.5;
        var _b = b + 0.5;

        if (_support_native_dash && bIsStrokeAndCanUseNative === true)
        {
            ctx.setLineDash([w_dot, w_dist]);

            //ctx.rect(x + 0.5, y + 0.5, r - x, b - y);
            ctx.moveTo(x, _y);
            ctx.lineTo(r - 1, _y);

            ctx.moveTo(_r, y);
            ctx.lineTo(_r, b - 1);

            ctx.moveTo(r + 1, _b);
            ctx.lineTo(x + 2, _b);

            ctx.moveTo(_x, b + 1);
            ctx.lineTo(_x, y + 2);

            ctx.stroke();
            ctx.setLineDash([]);
            return;
        }

        for (var i = x; i < r; i += w_dist)
        {
            ctx.moveTo(i, _y);
            i += w_dot;

            if (i > (r - 1))
                i = r - 1;

            ctx.lineTo(i, _y);
        }
        for (var i = y; i < b; i += w_dist)
        {
            ctx.moveTo(_r, i);
            i += w_dot;

            if (i > (b - 1))
                i = b - 1;

            ctx.lineTo(_r, i);
        }
        for (var i = r + 1; i > (x + 1); i -= w_dist)
        {
            ctx.moveTo(i, _b);
            i -= w_dot;

            if (i < (x + 2))
                i = x + 2;

            ctx.lineTo(i, _b);
        }
        for (var i = b + 1; i > (y + 1); i -= w_dist)
        {
            ctx.moveTo(_x, i);
            i -= w_dot;

            if (i < (y + 2))
                i = y + 2;

            ctx.lineTo(_x, i);
        }

        if (bIsStrokeAndCanUseNative)
            ctx.stroke();
    },

    AddLineDash : function(ctx, x1, y1, x2, y2, w_dot, w_dist)
    {
        var len = Math.sqrt((x2-x1)*(x2-x1) + (y2-y1)*(y2-y1));
        if (len < 1)
            len = 1;

        var len_x1 = Math.abs(w_dot*(x2-x1)/len);
        var len_y1 = Math.abs(w_dot*(y2-y1)/len);
        var len_x2 = Math.abs(w_dist*(x2-x1)/len);
        var len_y2 = Math.abs(w_dist*(y2-y1)/len);

		if (len_x1 < 0.01 && len_y1 < 0.01)
			return;
		if (len_x2 < 0.01 && len_y2 < 0.01)
			return;

        if (x1 <= x2 && y1 <= y2)
        {
            for (var i = x1, j = y1; i <= x2 && j <= y2; i += len_x2, j += len_y2)
            {
                ctx.moveTo(i, j);

                i += len_x1;
                j += len_y1;

                if (i > x2)
                    i = x2;
                if (j > y2)
                    j = y2;

                ctx.lineTo(i, j);
            }
        }
        else if (x1 <= x2 && y1 > y2)
        {
            for (var i = x1, j = y1; i <= x2 && j >= y2; i += len_x2, j -= len_y2)
            {
                ctx.moveTo(i, j);

                i += len_x1;
                j -= len_y1;

                if (i > x2)
                    i = x2;
                if (j < y2)
                    j = y2;

                ctx.lineTo(i, j);
            }
        }
        else if (x1 > x2 && y1 <= y2)
        {
            for (var i = x1, j = y1; i >= x2 && j <= y2; i -= len_x2, j += len_y2)
            {
                ctx.moveTo(i, j);

                i -= len_x1;
                j += len_y1;

                if (i < x2)
                    i = x2;
                if (j > y2)
                    j = y2;

                ctx.lineTo(i, j);
            }
        }
        else
        {
            for (var i = x1, j = y1; i >= x2 && j >= y2; i -= len_x2, j -= len_y2)
            {
                ctx.moveTo(i, j);

                i -= len_x1;
                j -= len_y1;

                if (i < x2)
                    i = x2;
                if (j < y2)
                    j = y2;

                ctx.lineTo(i, j);
            }
        }
    },

    AddRectDash : function(ctx, x1, y1, x2, y2, x3, y3, x4, y4, w_dot, w_dist, bIsStrokeAndCanUseNative)
    {
        var _support_native_dash = (undefined !== ctx.setLineDash);

        if (_support_native_dash && bIsStrokeAndCanUseNative === true)
        {
            ctx.setLineDash([w_dot, w_dist]);

            ctx.moveTo(x1, y1);
            ctx.lineTo(x2, y2);
            ctx.lineTo(x4, y4);
            ctx.lineTo(x3, y3);
            ctx.closePath();

            ctx.stroke();
            ctx.setLineDash([]);
            return;
        }

        this.AddLineDash(ctx, x1, y1, x2, y2, w_dot, w_dist);
        this.AddLineDash(ctx, x2, y2, x4, y4, w_dot, w_dist);
        this.AddLineDash(ctx, x4, y4, x3, y3, w_dot, w_dist);
        this.AddLineDash(ctx, x3, y3, x1, y1, w_dot, w_dist);

        if (bIsStrokeAndCanUseNative)
            ctx.stroke();
    },

    DrawAdjustment : function(matrix, x, y, bTextWarp)
    {
        if (window["Global"] && window["Global"].isOfficeViewer) {
            return;
        }

        var overlay = this.m_oOverlay;
        this.CurrentPageInfo = overlay.m_oHtmlPage.GetDrawingPageInfo(this.PageIndex);

        var drPage = this.CurrentPageInfo.drawingPage;

        var xDst = drPage.left;
        var yDst = drPage.top;
        var wDst = drPage.right - drPage.left;
        var hDst = drPage.bottom - drPage.top;

        var dKoefX = wDst / this.CurrentPageInfo.width_mm;
        var dKoefY = hDst / this.CurrentPageInfo.height_mm;

        var cx = (xDst + dKoefX * (matrix.TransformPointX(x, y))) >> 0;
        var cy = (yDst + dKoefY * (matrix.TransformPointY(x, y))) >> 0;

        var _style_blue = "#4D7399";
        var _style_yellow = "#FDF54A";
        var _style_text_adj = "#F888FF";

        var ctx = overlay.m_oContext;

        var dist = TRACK_ADJUSTMENT_SIZE / 2;

        if (!overlay.IsRetina && overlay.IsCellEditor && AscCommon.AscBrowser.isRetina)
            dist *= AscCommon.AscBrowser.retinaPixelRatio;

        ctx.moveTo(cx - dist, cy);
        ctx.lineTo(cx, cy - dist);
        ctx.lineTo(cx + dist, cy);
        ctx.lineTo(cx, cy + dist);
        ctx.closePath();

        overlay.CheckRect(cx - dist, cy - dist, TRACK_ADJUSTMENT_SIZE, TRACK_ADJUSTMENT_SIZE);


        if(bTextWarp === true)
        {
            ctx.fillStyle = _style_text_adj;
        }
        else
        {
            ctx.fillStyle = _style_yellow;
        }
        ctx.strokeStyle = _style_blue;

        ctx.fill();
        ctx.stroke();
        ctx.beginPath();
    },

    DrawEditWrapPointsPolygon : function(points, matrix)
    {
        var _len = points.length;
        if (0 == _len)
            return;

        var overlay = this.m_oOverlay;
        var ctx = overlay.m_oContext;

        this.CurrentPageInfo = overlay.m_oHtmlPage.GetDrawingPageInfo(this.PageIndex);

        var drPage = this.CurrentPageInfo.drawingPage;

        var xDst = drPage.left;
        var yDst = drPage.top;
        var wDst = drPage.right - drPage.left;
        var hDst = drPage.bottom - drPage.top;

        var dKoefX = wDst / this.CurrentPageInfo.width_mm;
        var dKoefY = hDst / this.CurrentPageInfo.height_mm;

        var _tr_points_x = new Array(_len);
        var _tr_points_y = new Array(_len);
        for (var i = 0; i < _len; i++)
        {
            _tr_points_x[i] = (xDst + dKoefX * (matrix.TransformPointX(points[i].x, points[i].y))) >> 0;
            _tr_points_y[i] = (yDst + dKoefY * (matrix.TransformPointY(points[i].x, points[i].y))) >> 0;
        }

        ctx.beginPath();
        for (var i = 0; i < _len; i++)
        {
            if (0 == i)
                ctx.moveTo(_tr_points_x[i], _tr_points_y[i]);
            else
                ctx.lineTo(_tr_points_x[i], _tr_points_y[i]);

            overlay.CheckPoint(_tr_points_x[i], _tr_points_y[i]);
        }

        ctx.closePath();
        ctx.lineWidth = 1;
        ctx.strokeStyle = "#FF0000";
        ctx.stroke();

        ctx.beginPath();
        for (var i = 0; i < _len; i++)
        {
            overlay.AddRect2(_tr_points_x[i] + 0.5, _tr_points_y[i] + 0.5, TRACK_WRAPPOINTS_SIZE);
        }
        ctx.strokeStyle = "#FFFFFF";
        ctx.fillStyle = "#000000";
        ctx.fill();
        ctx.stroke();

        ctx.beginPath();
    },

    DrawEditWrapPointsTrackLines : function(points, matrix)
    {
        var _len = points.length;
        if (0 == _len)
            return;

        var overlay = this.m_oOverlay;
        var ctx = overlay.m_oContext;

        this.CurrentPageInfo = overlay.m_oHtmlPage.GetDrawingPageInfo(this.PageIndex);

        var drPage = this.CurrentPageInfo.drawingPage;

        var xDst = drPage.left;
        var yDst = drPage.top;
        var wDst = drPage.right - drPage.left;
        var hDst = drPage.bottom - drPage.top;

        var dKoefX = wDst / this.CurrentPageInfo.width_mm;
        var dKoefY = hDst / this.CurrentPageInfo.height_mm;

        var _tr_points_x = new Array(_len);
        var _tr_points_y = new Array(_len);
        for (var i = 0; i < _len; i++)
        {
            _tr_points_x[i] = (xDst + dKoefX * (matrix.TransformPointX(points[i].x, points[i].y))) >> 0;
            _tr_points_y[i] = (yDst + dKoefY * (matrix.TransformPointY(points[i].x, points[i].y))) >> 0;
        }

        var globalAlpha = ctx.globalAlpha;
        ctx.globalAlpha = 1.0;

        ctx.beginPath();
        for (var i = 0; i < _len; i++)
        {
            if (0 == i)
                ctx.moveTo(_tr_points_x[i], _tr_points_y[i]);
            else
                ctx.lineTo(_tr_points_x[i], _tr_points_y[i]);

            overlay.CheckPoint(_tr_points_x[i], _tr_points_y[i]);
        }
        ctx.lineWidth = 1;
        ctx.strokeStyle = "#FFFFFF";
        ctx.stroke();

        ctx.beginPath();
        for (var i = 1; i < _len; i++)
        {
            this.AddLineDash(ctx, _tr_points_x[i-1], _tr_points_y[i-1], _tr_points_x[i], _tr_points_y[i], 4, 4);
        }
        ctx.lineWidth = 1;
        ctx.strokeStyle = "#000000";
        ctx.stroke();

        ctx.beginPath();

        ctx.globalAlpha = globalAlpha;
    },

    DrawInlineMoveCursor : function(x, y, h, matrix)
    {
        var overlay = this.m_oOverlay;
        this.CurrentPageInfo = overlay.m_oHtmlPage.GetDrawingPageInfo(this.PageIndex);

        var drPage = this.CurrentPageInfo.drawingPage;

        var xDst = drPage.left;
        var yDst = drPage.top;
        var wDst = drPage.right - drPage.left;
        var hDst = drPage.bottom - drPage.top;

        var dKoefX = wDst / this.CurrentPageInfo.width_mm;
        var dKoefY = hDst / this.CurrentPageInfo.height_mm;

        var bIsIdentMatr = true;
        if (matrix !== undefined && matrix != null)
        {
            if (matrix.IsIdentity2())
            {
                x += matrix.tx;
                y += matrix.ty;
            }
            else
            {
                bIsIdentMatr = false;
            }
        }

        overlay.SetBaseTransform();

        if (bIsIdentMatr)
        {
            var __x = (xDst + dKoefX * x) >> 0;
            var __y = (yDst + dKoefY * y) >> 0;
            var __h = (h * dKoefY) >> 0;

            overlay.CheckRect(__x,__y,2,__h);

            var ctx = overlay.m_oContext;

            var _oldAlpha = ctx.globalAlpha;
            ctx.globalAlpha = 1;

            ctx.lineWidth = 1;
            ctx.strokeStyle = "#000000";
            for (var i = 0; i < __h; i+=2)
            {
                ctx.moveTo(__x,__y+i+0.5);
                ctx.lineTo(__x+2,__y+i+0.5);
            }
            ctx.stroke();

            ctx.beginPath();
            ctx.strokeStyle = "#FFFFFF";
            for (var i = 1; i < __h; i+=2)
            {
                ctx.moveTo(__x,__y+i+0.5);
                ctx.lineTo(__x+2,__y+i+0.5);
            }
            ctx.stroke();

            ctx.globalAlpha = _oldAlpha;
        }
        else
        {
            var _x1 = matrix.TransformPointX(x, y);
            var _y1 = matrix.TransformPointY(x, y);

            var _x2 = matrix.TransformPointX(x, y + h);
            var _y2 = matrix.TransformPointY(x, y + h);

            _x1 = xDst + dKoefX * _x1;
            _y1 = yDst + dKoefY * _y1;

            _x2 = xDst + dKoefX * _x2;
            _y2 = yDst + dKoefY * _y2;

            overlay.CheckPoint(_x1, _y1);
            overlay.CheckPoint(_x2, _y2);

            var ctx = overlay.m_oContext;

            var _oldAlpha = ctx.globalAlpha;
            ctx.globalAlpha = 1;

            ctx.lineWidth = 2;
            ctx.beginPath();
            ctx.strokeStyle = "#FFFFFF";
            ctx.moveTo(_x1, _y1);
            ctx.lineTo(_x2, _y2);
            ctx.stroke();
            ctx.beginPath();

            ctx.strokeStyle = "#000000";

            var _vec_len = Math.sqrt((_x2 - _x1)*(_x2 - _x1) + (_y2 - _y1)*(_y2 - _y1));
            var _dx = (_x2 - _x1) / _vec_len;
            var _dy = (_y2 - _y1) / _vec_len;

            var __x = _x1;
            var __y = _y1;
            for (var i = 0; i < _vec_len; i += 2)
            {
                ctx.moveTo(__x, __y);

                __x += _dx;
                __y += _dy;

                ctx.lineTo(__x, __y);

                __x += _dx;
                __y += _dy;
            }
            ctx.stroke();

            ctx.globalAlpha = _oldAlpha;
        }
    },

    drawFlowAnchor : function(x, y)
    {
        var _flow_anchor = this.m_oOverlay.IsRetina ? AscCommon.g_flow_anchor2 : AscCommon.g_flow_anchor;
        if (!_flow_anchor || !_flow_anchor.asc_complete || (!editor || !editor.ShowParaMarks))
            return;

        var overlay = this.m_oOverlay;
        this.CurrentPageInfo = overlay.m_oHtmlPage.GetDrawingPageInfo(this.PageIndex);

        var drPage = this.CurrentPageInfo.drawingPage;

        var xDst = drPage.left;
        var yDst = drPage.top;
        var wDst = drPage.right - drPage.left;
        var hDst = drPage.bottom - drPage.top;

        var dKoefX = wDst / this.CurrentPageInfo.width_mm;
        var dKoefY = hDst / this.CurrentPageInfo.height_mm;

        var __x = (xDst + dKoefX * x) >> 0;
        var __y = (yDst + dKoefY * y) >> 0;

        __x -= 8;

        overlay.CheckRect(__x,__y,13,15);

        var ctx = overlay.m_oContext;
        var _oldAlpha = ctx.globalAlpha;
        ctx.globalAlpha = 1;

        overlay.SetBaseTransform();

        ctx.drawImage(_flow_anchor, __x, __y, 13, 15);
        ctx.globalAlpha = _oldAlpha;
    },

    DrawPresentationComment : function(type, x, y, w, h)
    {
        if (!window.g_comment_image || !window.g_comment_image.asc_complete)
            return;

        var overlay = this.m_oOverlay;
        this.CurrentPageInfo = overlay.m_oHtmlPage.GetDrawingPageInfo(this.PageIndex);

        var drPage = this.CurrentPageInfo.drawingPage;

        var xDst = drPage.left;
        var yDst = drPage.top;
        var wDst = drPage.right - drPage.left;
        var hDst = drPage.bottom - drPage.top;

        var dKoefX = wDst / this.CurrentPageInfo.width_mm;
        var dKoefY = hDst / this.CurrentPageInfo.height_mm;

        var __x = (xDst + dKoefX * x) >> 0;
        var __y = (yDst + dKoefY * y) >> 0;

        var ctx = overlay.m_oContext;
        var _oldAlpha = ctx.globalAlpha;
        ctx.globalAlpha = 0.5;

        overlay.SetBaseTransform();

        var _index = 0;
        if ((type & 0x02) == 0x02)
            _index = 2;
        if ((type & 0x01) == 0x01)
            _index += 1;

        var _offset = g_comment_image_offsets[_index];
        overlay.CheckRect(__x, __y, _offset[2], _offset[3]);

        this.m_oContext.drawImage(window.g_comment_image, _offset[0], _offset[1], _offset[2], _offset[3], __x, __y, _offset[2], _offset[3]);

        ctx.globalAlpha = _oldAlpha;
    }
};

	function DrawTextByCenter() // this!
	{
		var shape = new AscFormat.CShape();
		shape.setTxBody(AscFormat.CreateTextBodyFromString("", this, shape));
		var par = shape.txBody.content.Content[0];
		par.Reset(0, 0, 1000, 1000, 0);
		par.MoveCursorToStartPos();
		var _paraPr = new CParaPr();
		par.Pr = _paraPr;
		var _textPr = new CTextPr();
		_textPr.FontFamily = { Name : this.Font, Index : -1 };
		_textPr.RFonts.Ascii = { Name : this.Font, Index : -1 };
		_textPr.RFonts.EastAsia = { Name : this.Font, Index : -1 };
		_textPr.RFonts.CS = { Name : this.Font, Index : -1 };
		_textPr.RFonts.HAnsi = { Name : this.Font, Index : -1 };

		_textPr.Bold = this.Bold;
		_textPr.Italic = this.Italic;

		_textPr.FontSize = this.Size;
		_textPr.FontSizeCS = this.Size;

		var parRun = new ParaRun(par); var Pos = 0;
		parRun.Set_Pr(_textPr);
		parRun.AddText(this.Text);
		par.AddToContent(0, parRun);

		par.Recalculate_Page(0);
		par.Recalculate_Page(0);

		var _bounds = par.Get_PageBounds(0);

        var _canvas = this.getCanvas();
		var _ctx = _canvas.getContext('2d');
		var _wPx = _canvas.width;
		var _hPx = _canvas.height;

		var _wMm = _wPx * AscCommon.g_dKoef_pix_to_mm;
		var _hMm = _hPx * AscCommon.g_dKoef_pix_to_mm;

		_ctx.clearRect(0, 0, _wPx, _hPx);

		var _pxBoundsW = par.Lines[0].Ranges[0].W * AscCommon.g_dKoef_mm_to_pix;//(_bounds.Right - _bounds.Left) * g_dKoef_mm_to_pix;
		var _pxBoundsH = (_bounds.Bottom - _bounds.Top) * AscCommon.g_dKoef_mm_to_pix;

		var _yOffset = (_hPx - _pxBoundsH) >> 1;
		var _xOffset = (_wPx - _pxBoundsW) >> 1;

		var graphics = new AscCommon.CGraphics();
		graphics.init(_ctx, _wPx, _hPx, _wMm, _hMm);
		graphics.m_oFontManager = AscCommon.g_fontManager;

		graphics.m_oCoordTransform.tx = _xOffset;
		graphics.m_oCoordTransform.ty = _yOffset;

		graphics.transform(1,0,0,1,0,0);

		par.Draw(0, graphics);
	}

    //--------------------------------------------------------export----------------------------------------------------
    window['AscCommon'] = window['AscCommon'] || {};
    window['AscCommon'].TRACK_CIRCLE_RADIUS = TRACK_CIRCLE_RADIUS;
    window['AscCommon'].TRACK_DISTANCE_ROTATE = TRACK_DISTANCE_ROTATE;
    window['AscCommon'].COverlay = COverlay;
    window['AscCommon'].CAutoshapeTrack = CAutoshapeTrack;

    window['AscCommon'].DrawTextByCenter = DrawTextByCenter;
})(window);
