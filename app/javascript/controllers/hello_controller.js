import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = ["themeProvider"];

  toggle() {    
    var atualValue = this.element.getAttribute("theme");
    if (atualValue === "base") {
      this.themeProviderTarget.setAttribute("theme", "dark");
      return;
    }
    this.themeProviderTarget.setAttribute("theme", "base");
  }
}
