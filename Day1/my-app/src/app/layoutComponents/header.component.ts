import { Component } from "@angular/core";

@Component({
    selector:"app-header",
    template: `
    <table width="100%">
    <tr valign="top">
    <td width="100px">
    <img height="80px" width="80px" src="https://cdn3.iconfinder.com/data/icons/alphabets-and-numbers/98/13-512.png">
    </td>
    <td align="center"><h1>Customers & Orders App</h1></td>
    </tr></table>
    `
})

export class HeaderComponent{}