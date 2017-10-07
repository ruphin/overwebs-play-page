import{GluonElement,html}from'../gluonjs/gluon.js';import'../overwebs-play-tile/overwebs-play-tile.js';import'../overwebs-player-data/overwebs-player-data.js';import'../overwebs-player-widget/overwebs-player-widget.js';import'../overwebs-fonts/overwebs-fonts.js';class OverwebsPlayPage extends GluonElement{get template(){return html`
    <style>
    :host {
      display: block;
      position: relative;
      overflow: hidden;
      width: 100%;
      min-height: 100vh;
      background: rgba(0, 0, 0, 0.25);
    }

    overwebs-player-widget {
      position: absolute;
      top: calc(40 / 2560 * var(--overwebs-window-size, 1920px));
      right: calc(68 / 2560 * var(--overwebs-window-size, 1920px));
    }

    a {
      text-decoration: none;
    }

    .header {
      position: absolute;
      top: calc(154 / 2560 * var(--overwebs-window-size, 1920px));
      left: calc(120 / 2560 * var(--overwebs-window-size, 1920px));
      height: calc(230 / 2560 * var(--overwebs-window-size, 1920px));
      overflow: visible;
      animation-duration: 0.6s;
      animation-name: headermove;
      animation-iteration-count: 1;
      animation-timing-function: ease-out;
      animation-direction: normal;
    }

    .header #text {
      font-family: overwebs-big-noodle;
      font-size: calc(266 / 2560 * var(--overwebs-window-size, 1920px));
    }

    .modes {
      margin-top: calc(370 / 2560 * var(--overwebs-window-size, 1920px));
      padding-left: calc(60 / 2560 * var(--overwebs-window-size, 1920px));
      padding-right: calc(60 / 2560 * var(--overwebs-window-size, 1920px));
      display: flex;
      justify-content: center;
      flex-wrap: wrap;
    }

    .modes > * {
      animation-duration: 0.2s;
      animation-name: fadein;
      animation-iteration-count: 1;
      animation-timing-function: linear;
      animation-direction: normal;
      animation-fill-mode: both;
      margin: calc(8 / 2560 * var(--overwebs-window-size, 1920px));
    }
    .modes > *:nth-child(2) {
      animation-delay: 0.05s;
    }
    .modes > *:nth-child(3) {
      animation-delay: 0.1s;
    }
    .modes > *:nth-child(4) {
      animation-delay: 0.15s;
    }
    .modes > *:nth-child(5) {
      animation-delay: 0.2s;
    }
    .modes > *:hover {
      z-index: 2;
    }

    @keyframes fadein {
      0% {
        transform: rotateY( -60deg ) translateX(calc(-40 / 2560 * var(--overwebs-window-size, 1920px)));
        opacity: 0;
      }
      100% {
        opacity: 1;
      }
    }

    @keyframes headermove {
      from {
        opacity: 0;
        transform: translateY(calc(30 / 2560 * var(--overwebs-window-size, 1920px)));
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }
    </style>
    
    <overwebs-player-data id="playerData"></overwebs-player-data>
    <overwebs-player-widget id="playerWidget"></overwebs-player-widget>
    <svg class="header" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="fillgradient" x1="0" x2="0" y1="0" y2="1">
          <stop stop-color="#ffffff" offset="0" stop-opacity=".9"/>
          <stop stop-color="#ffffff" offset="1" stop-opacity="0.1"/>
        </linearGradient>
        <linearGradient id="outlinegradient" x1="0" x2="0" y1="0" y2="1">
          <stop stop-color="#4C5C76" offset="0" stop-opacity="0.6"/>
          <stop stop-color="#4C5C76" offset="1" stop-opacity="0.3"/>
        </linearGradient>
      </defs>
      <g>
        <text id="text" x="0" y="95%" stroke-width="0.12625vw" stroke-linejoin="round" stroke-alignment="outside" stroke="url(#outlinegradient)" fill="url(#fillgradient)">Play</text>
      </g>
    </svg>
    <div class="modes">
      <span>
        <overwebs-play-tile id="quick-play" quick-play>
          <div slot="title">Quick Play</div>
          <div slot="description">Jump into a game against other players of your skill level.</div>
        </overwebs-play-tile>
      </span>
      <a href="/arcade">
        <overwebs-play-tile arcade>
          <div slot="title">Arcade</div>
          <div slot="description">New game modes! New Rules! New maps! Enter the arcade.</div>
        </overwebs-play-tile>
      </a>
      <a href="/competitive">
        <overwebs-play-tile competitive-play info>
          <div slot="title">Competitive Play</div>
          <div slot="description">Compete against other players and work your way up the ranks.</div>
        </overwebs-play-tile>
      </a>
      <a href="/vs-ai">
        <overwebs-play-tile play-vs-ai>
          <div slot="title">Play vs. AI</div>
          <div slot="description">Hone your skills against a team of AI-controlled heroes.</div>
        </overwebs-play-tile>
      </a>
      <span>
        <overwebs-play-tile custom-game>
          <div slot="title">Custom Game</div>
          <div slot="description">Change the rules and play a game with your friends or AI.</div>
        </overwebs-play-tile>
      </span>
    </div>
    <overwebs-game-state id='game-state'></overwebs-game-state>
    <overwebs-global-button id="backButton" action="back"></overwebs-global-button>`}connectedCallback(){super.connectedCallback(),this.$.backButton.onclick=(a)=>{a.stopPropagation(),history.back()},this.$.playerData.addEventListener('player-changed',()=>{this.$.playerWidget.player=this.$.playerData.player}),this.$['quick-play'].onclick=()=>{this.dispatchEvent(new CustomEvent('queue',{detail:{"queue-type":'Quick Play'}}))}}}customElements.define(OverwebsPlayPage.is,OverwebsPlayPage);
//# sourceMappingURL=overwebs-play-page.js.map
