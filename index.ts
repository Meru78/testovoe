import * as readline from 'readline';
import Loc from './classes/loc';
import Media from './classes/media';
import MediaLocator from './classes/mediaLocator';

const ru = new Loc("/ru")
const msk = new Loc("/ru/msk");
const svrd = new Loc("/ru/svrd");
const ekb = new Loc("/ru/svrd/ekb");
const revda = new Loc("/ru/svrd/revda");
const pervik = new Loc("/ru/svrd/pervik");
const perm = new Loc("/ru/permobl");
const chelobl = new Loc("/ru/chelobl");
const be = new Loc("/be/msk");

svrd.addChild(ekb);
svrd.addChild(revda);
svrd.addChild(pervik);

ru.addChild(msk)
ru.addChild(svrd)
ru.addChild(perm)
ru.addChild(chelobl)

const yandexDirect = new Media("Яндекс.Директ", [ru]);  
const ekbWorker = new Media("Бегущая строка в троллейбусах Екатеринбурга", [ekb]);
const ekbKurWorker = new Media("Быстрый курьер", [ekb]);
const revdaWorker = new Media("Ревдинский рабочий", [revda, pervik]);
const uralMoscowNewspaper = new Media("Газета уральских москвичей", [msk, perm, chelobl]);
const bePaper = new Media("Беларусская правда", [be]);  

const locator = new MediaLocator([yandexDirect, ekbWorker, ekbKurWorker, revdaWorker, bePaper, uralMoscowNewspaper], [msk, svrd, ekb, revda, pervik, perm, chelobl]);

const rl = readline.createInterface({
input: process.stdin,
output: process.stdout,
});

rl.question("Введите локацию (или 'q' для выхода): ", (location) => {
if (location === "q") {
    rl.close();
    return;
}

const medias = locator.findMediasForLocation(new Loc(location));
console.log(`Медианосители, действующие в локации ${location}:`);
medias.forEach((media) => console.log(media));

rl.close();
});