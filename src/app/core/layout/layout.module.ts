import { NgModule } from "@angular/core";
import { NavbarComponent } from "./navbar/navbar.component";
import { MenuComponent } from "./menu/menu.component";
import { AppRoutingModule } from "../../app.routing.module";
import { BrowserModule } from "@angular/platform-browser";
import { ContentComponent } from "./content/content.component";
import { ComponentModule } from "app/components/component.module";

@NgModule({
  imports: [AppRoutingModule, BrowserModule, ComponentModule],
  declarations: [NavbarComponent, MenuComponent, ContentComponent],
  exports: [NavbarComponent, MenuComponent, ContentComponent]
})
export class LayoutModule {}
