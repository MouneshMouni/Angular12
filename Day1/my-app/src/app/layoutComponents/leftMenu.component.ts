import { Component } from "@angular/core";

@Component({
    selector:"app-left-menu",
    template: `
    <table width="100%">
    <tr valign="top">
    <td align="left">
    &nbsp;&nbsp;<a href="customers">Customers</a>
    </td>
    </tr>
    <tr valign="top">
    <td align="left">
    &nbsp;&nbsp;<a href="orders">Orders</a>
    </td>
    </tr>
    <tr valign="top">
    <td align="left">
    &nbsp;&nbsp;<a href="about">About Us</a>
    </td>
    </tr>
    <tr valign="top">
    <td align="left">
    &nbsp;&nbsp;<a href="services">Services</a>
    </td>
    </tr>
    </table>
    `
})

export class LeftMenuComponent{}