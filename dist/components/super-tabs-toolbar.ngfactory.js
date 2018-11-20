/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
import * as i0 from "@angular/core";
import * as i1 from "./super-tab-button.ngfactory";
import * as i2 from "./super-tab-button";
import * as i3 from "../../node_modules/ionic-angular/components/toolbar/toolbar.ngfactory";
import * as i4 from "ionic-angular/components/toolbar/toolbar";
import * as i5 from "ionic-angular/config/config";
import * as i6 from "@angular/common";
import * as i7 from "./super-tabs-toolbar";
import * as i8 from "ionic-angular/platform/platform";
var styles_SuperTabsToolbar = [];
var RenderType_SuperTabsToolbar = i0.ɵcrt({ encapsulation: 2, styles: styles_SuperTabsToolbar, data: {} });
export { RenderType_SuperTabsToolbar as RenderType_SuperTabsToolbar };
function View_SuperTabsToolbar_1(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, [[3, 0], ["indicator", 1]], null, 0, "div", [], [[8, "className", 0]], null, null, null, null))], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = i0.ɵinlineInterpolate(1, "indicator ", ("button-md-" + _co.indicatorColor), ""); _ck(_v, 0, 0, currVal_0); }); }
function View_SuperTabsToolbar_2(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 1, "super-tab-button", [["role", "button"], ["tappable", ""]], [[2, "selected", null], [2, "title-only", null], [2, "icon-only", null], [2, "title-and-icon", null]], [[null, "select"], [null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (i0.ɵnov(_v, 1).onClick() !== false);
        ad = (pd_0 && ad);
    } if (("select" === en)) {
        var pd_1 = (_co.onTabSelect(_v.context.index) !== false);
        ad = (pd_1 && ad);
    } return ad; }, i1.View_SuperTabButtonComponent_0, i1.RenderType_SuperTabButtonComponent)), i0.ɵdid(1, 49152, [[1, 4]], 0, i2.SuperTabButtonComponent, [i0.ElementRef], { selected: [0, "selected"], title: [1, "title"], icon: [2, "icon"], badge: [3, "badge"], badgeColor: [4, "badgeColor"], color: [5, "color"] }, { select: "select" })], function (_ck, _v) { var _co = _v.component; var currVal_4 = (_co.selectedTab === _v.context.index); var currVal_5 = _v.context.$implicit.title; var currVal_6 = _v.context.$implicit.icon; var currVal_7 = _v.context.$implicit.badge; var currVal_8 = _co.badgeColor; var currVal_9 = _co.tabsColor; _ck(_v, 1, 0, currVal_4, currVal_5, currVal_6, currVal_7, currVal_8, currVal_9); }, function (_ck, _v) { var currVal_0 = i0.ɵnov(_v, 1).selected; var currVal_1 = (!!i0.ɵnov(_v, 1).title && !i0.ɵnov(_v, 1).icon); var currVal_2 = (!i0.ɵnov(_v, 1).title && !!i0.ɵnov(_v, 1).icon); var currVal_3 = (!!i0.ɵnov(_v, 1).title && !!i0.ɵnov(_v, 1).icon); _ck(_v, 0, 0, currVal_0, currVal_1, currVal_2, currVal_3); }); }
function View_SuperTabsToolbar_3(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, [[3, 0], ["indicator", 1]], null, 0, "div", [], [[8, "className", 0]], null, null, null, null))], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = i0.ɵinlineInterpolate(1, "indicator ", ("button-md-" + _co.indicatorColor), ""); _ck(_v, 0, 0, currVal_0); }); }
export function View_SuperTabsToolbar_0(_l) { return i0.ɵvid(0, [i0.ɵqud(671088640, 1, { tabButtons: 1 }), i0.ɵqud(402653184, 2, { tabButtonsContainer: 0 }), i0.ɵqud(671088640, 3, { indicator: 0 }), i0.ɵqud(402653184, 4, { tabButtonsBar: 0 }), (_l()(), i0.ɵted(-1, null, ["\n    "])), (_l()(), i0.ɵeld(5, 0, null, null, 17, "ion-toolbar", [["class", "toolbar"], ["mode", "md"]], [[2, "scroll-tabs", null], [2, "statusbar-padding", null]], null, null, i3.View_Toolbar_0, i3.RenderType_Toolbar)), i0.ɵdid(6, 49152, null, 0, i4.Toolbar, [i5.Config, i0.ElementRef, i0.Renderer], { color: [0, "color"], mode: [1, "mode"] }, null), (_l()(), i0.ɵted(-1, 3, ["\n      "])), (_l()(), i0.ɵeld(8, 0, [[2, 0], ["tabButtonsContainer", 1]], 3, 13, "div", [["class", "tab-buttons-container"]], null, null, null, null, null)), (_l()(), i0.ɵted(-1, null, ["\n        "])), (_l()(), i0.ɵand(16777216, null, null, 1, null, View_SuperTabsToolbar_1)), i0.ɵdid(11, 16384, null, 0, i6.NgIf, [i0.ViewContainerRef, i0.TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), i0.ɵted(-1, null, ["\n        "])), (_l()(), i0.ɵeld(13, 0, [[4, 0], ["tabButtons", 1]], null, 4, "div", [["class", "tab-buttons"]], null, null, null, null, null)), (_l()(), i0.ɵted(-1, null, ["\n          "])), (_l()(), i0.ɵand(16777216, null, null, 1, null, View_SuperTabsToolbar_2)), i0.ɵdid(16, 802816, null, 0, i6.NgForOf, [i0.ViewContainerRef, i0.TemplateRef, i0.IterableDiffers], { ngForOf: [0, "ngForOf"] }, null), (_l()(), i0.ɵted(-1, null, ["\n        "])), (_l()(), i0.ɵted(-1, null, ["\n        "])), (_l()(), i0.ɵand(16777216, null, null, 1, null, View_SuperTabsToolbar_3)), i0.ɵdid(20, 16384, null, 0, i6.NgIf, [i0.ViewContainerRef, i0.TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), i0.ɵted(-1, null, ["\n      "])), (_l()(), i0.ɵted(-1, 3, ["\n    "])), (_l()(), i0.ɵted(-1, null, ["\n  "]))], function (_ck, _v) { var _co = _v.component; var currVal_2 = _co.color; var currVal_3 = "md"; _ck(_v, 6, 0, currVal_2, currVal_3); var currVal_4 = (_co.tabsPlacement === "bottom"); _ck(_v, 11, 0, currVal_4); var currVal_5 = _co.tabs; _ck(_v, 16, 0, currVal_5); var currVal_6 = (_co.tabsPlacement === "top"); _ck(_v, 20, 0, currVal_6); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.scrollTabs; var currVal_1 = i0.ɵnov(_v, 6)._sbPadding; _ck(_v, 5, 0, currVal_0, currVal_1); }); }
export function View_SuperTabsToolbar_Host_0(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 1, "super-tabs-toolbar", [], null, null, null, View_SuperTabsToolbar_0, RenderType_SuperTabsToolbar)), i0.ɵdid(1, 4374528, null, 0, i7.SuperTabsToolbar, [i0.ElementRef, i8.Platform, i0.Renderer2], null, null)], null, null); }
var SuperTabsToolbarNgFactory = i0.ɵccf("super-tabs-toolbar", i7.SuperTabsToolbar, View_SuperTabsToolbar_Host_0, { color: "color", tabsColor: "tabsColor", badgeColor: "badgeColor", scrollTabs: "scrollTabs", indicatorColor: "indicatorColor", selectedTab: "selectedTab", config: "config", tabsPlacement: "tabsPlacement" }, { tabSelect: "tabSelect" }, []);
export { SuperTabsToolbarNgFactory as SuperTabsToolbarNgFactory };
//# sourceMappingURL=super-tabs-toolbar.ngfactory.js.map