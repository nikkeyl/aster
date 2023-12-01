import Inputmask from "inputmask/dist/inputmask.es6.js";
import { routeObjects } from "@js/base/routeObjects";

const inputMasks = document.querySelectorAll('input');
if (inputMasks.length) {
    routeObjects.inputmask = Inputmask().mask(inputMasks);
}