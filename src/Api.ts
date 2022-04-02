export class Api {
  static testRan = false

  static gameLoop() {
    if(!this.testRan) {
      this.testRan = true
      console.log('This is a test.')
    }
  }
  
}