
/**
 * Consts and state
 */

let game;
const OPPONENT_HEIGHT = 5,
    OPPONENT_PICTURE = "assets/img/malo.png",
    OPPONENT_PICTURE_DEAD = "assets/img/malo_muerto.png",
    OPPONENT_SPEED = 5,
    OPPONENT_WIDTH = 5,
    GAME_OVER_PICTURE = "assets/img/game_over.png",
    KEY_LEFT = "LEFT",
    KEY_RIGHT = "RIGHT",
    KEY_SHOOT = "SHOOT",
    MIN_TOUCHMOVE = 20,
    PLAYER_HEIGHT = 5,
    PLAYER_PICTURE = "assets/img/bueno.png",
    PLAYER_PICTURE_DEAD = "assets/img/bueno_muerto.png",
    PLAYER_SPEED = 20,
    PLAYER_WIDTH = 5,
    SHOT_HEIGHT = 1.5,
    SHOT_SPEED = 20,
    SHOT_PICTURE_PLAYER = "assets/img/shot1.png",
    SHOT_PICTURE_OPPONENT = "assets/img/shot2.png",
    SHOT_WIDTH = 1.5,

    GAME_UI = {
        app: document.querySelector('#app'),
        gameBoard: document.querySelector('.game'),
        pages: {
            splash: document.querySelector('#splash_page'),
            menu: document.querySelector('#menu_page'),
            main: document.querySelector('#main_page'),
            settings: document.querySelector('#settings_page'),
            leaderboard: document.querySelector('#leaderboard_page')
        },
        modalWindows: {
            pause: document.querySelector('#modal_pause_window'),
            confirm: document.querySelector('#modal_confirm'),
            spinner: document.querySelector('#modal_loading_spinner')
        },
        state: {
            navigationStage: '',
            playing: false,
            paused: false,
            spinning: false
        }
    };

    let VIDAS =  3; //vidas


/**
 * SVG TRICK
 */
let sliderItems = document.querySelectorAll('.slider_item');
if (sliderItems.length > 0) {
    sliderItems.forEach(si => {
        document.addEventListener('mousemove', ev => {
            let face = si.querySelector('g.face');

            let { pageX, pageY } = ev;
            let { top, bottom, left, right } = face.getBoundingClientRect();
            let centroid = [left + Math.abs((right - left) / 2), top + Math.abs((top - bottom) / 2)];
            let distance = [pageX - centroid[0], pageY - centroid[0]];
            let multip = 0.02

            Object.assign(face.style, {
                transformOrigin: 'center center',
                transform: `translate(${distance[0] * multip}px, ${distance[1] * multip}px)`
            });
        });
    });
}



/**
 * loading scripts
 */

window.addEventListener('load', () => {
    initNavigation();
    initUI();
    navigationTo('#splash_page', 'fade_in');
});
