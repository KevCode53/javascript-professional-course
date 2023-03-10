import MediaPlayer from "../MediaPlayer";

class AutoPause {
  private threshold: number;
  player: MediaPlayer;

  constructor() {
    this.threshold = 0.25;
    this.handleIntersection = this.handleIntersection.bind(this);
    this.handleVisibilityChange = this.handleVisibilityChange.bind(this);
  }
  run(player) {
    this.player = player;

    const observer = new IntersectionObserver(this.handleIntersection, {
      threshold: this.threshold,
    });
    observer.observe(player.media);
    document.addEventListener("visibilitychange", this.handleVisibilityChange);
  }

  private handleIntersection(entries: IntersectionObserverEntry[]) {
    const entry = entries[0];
    const isVisbile = entry.intersectionRatio >= this.threshold;
    if (isVisbile) {
      this.player.play();
    } else {
      this.player.pause();
    }
  }

  private handleVisibilityChange() {
    const isVisbile = document.visibilityState === "visible";
    if (isVisbile) {
      this.player.play();
    } else {
      this.player.pause();
    }
  }
}

export default AutoPause;
