const cvs = document.getElementById("breakout")
const ctx = cvs.getContext("2d")

cvs.style.border = "1px solid #0ff"

ctx.lineWidth = 3

const PADDLE_WIDTH = 100
const PADDLE_MARGIN_BOTTOM = 50
const PADDLE_HEIGHT = 20
const BALL_RADIUS = 8
let LIFE = 3
let SCORE = 0
const SCORE_UNIT = 10
let LEVEL = 1
const MAX_LEVEL = 3
let GAME_OVER = false
let leftArrow = false
let rightArrow = false