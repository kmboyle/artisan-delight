import { Injectable } from "@angular/core";

export interface IconFiles {
  imageFile: string;
  alt: string;
  link: string;
}

export interface CoreConfigSettings {
  showLanguageSelector?: boolean;
  showUserControls?: boolean;
  showStatusBar?: boolean;
  showStatusBarBreakpoint?: number;
  socialIcons?: Array<IconFiles>;
}

@Injectable({
  providedIn: 'root'
})
export class CoreConfigService {
  showLanguageSelector = true;
  showUserControls = true;
  showStatusBar = true;
  showStatusBarBreakpoint = 0;
  socialIcons = new Array<IconFiles>();
  configure(settings: CoreConfigSettings): void {
    Object.assign(this, settings);
  }
}


