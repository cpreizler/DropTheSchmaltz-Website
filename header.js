Vue.component('site-header', {
	template: `<header>
    <nav class="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
        <a class="navbar-brand" href="index.html">Drop The Schmaltz <img src="muscle.png" width="50" height="50" alt="muscle"> </a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarCollapse">
            <ul class="navbar-nav mr-auto">
              <li class="nav-item"><a class="nav-link" href="index.html">Home</a></li>
              <li class="nav-item"><a class="nav-link" href="motivation.html">Motivation</a></li>                     
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" id="Women" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Women</a>
                <div class="dropdown-menu" aria-labelledby="Women">
                  <a class="dropdown-item" href="bmi-calc-women.html">BMI Calculator</a>
                  <a class="dropdown-item" href="bmr-calc-women.html">BMR Calculator</a>
                  <a class="dropdown-item" href="https://www.muscleandfitness.com/">Weight Loss</a>
                  <a class="dropdown-item" href="https://www.muscleandfitness.com/">Pregnancy Workouts</a>
                  <a class="dropdown-item" href="https://www.muscleandfitness.com/">Targeted Exercises</a>
                  <a class="dropdown-item" href="https://www.muscleandfitness.com/">Healthy Eats</a>
                </div>
              </li>                      
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" id="men" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Men</a>
                <div class="dropdown-menu" aria-labelledby="men">
                  <a class="dropdown-item" href="bmi-calc-men.html">BMI Calculator</a>
                  <a class="dropdown-item" href="bmr-calc-men.html">BMR Calculator</a>
                  <a class="dropdown-item" href="https://www.muscleandfitness.com/">Weight Loss</a>
                  <a class="dropdown-item" href="https://www.muscleandfitness.com/">Muscle Gain</a>
                  <a class="dropdown-item" href="six-pack.html">Six Pack</a>
                </div>
              </li>                      
              <li class="nav-item"><a class="nav-link" href="contact.html">Contact</a></li>
            </ul>
        </div>
    </nav>             
    <p style="color:gray; font-size:20px; margin:18px">{{ pageName }}</p>
</header>`,
props: ['pageName']
});

var app = new Vue({
	el: '#app'})
