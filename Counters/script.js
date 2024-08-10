// one

$(document).ready(function () {
    const counters = document.querySelectorAll('.counter-box');
    const options = {
      threshold: 0.5
    };
  
    function runCounter(counter) {
      const target = +counter.getAttribute('data-target');
      const duration = 2000; // Total duration in milliseconds
      const interval = 10; // Interval time in milliseconds
      const increment = target / (duration / interval);
      let current = 0;
  
      const updateCounter = () => {
        current += increment;
        if (current < target) {
          counter.innerText = Math.ceil(current);
          setTimeout(updateCounter, interval);
        } else {
          counter.innerText = target;
        }
      };
  
      updateCounter();
    }
  
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          runCounter(entry.target);
          observer.unobserve(entry.target);
        }
      });
    }, options);
  
    counters.forEach(counter => {
      observer.observe(counter);
    });
  });
  
//   two

function AboutCounter()
{
  $(".circle_percent").each(function() {
    var $this = $(this),
		$dataV = $this.data("percent"),
		$dataDeg = $dataV * 3.6,
		$round = $this.find(".round_per");
	$round.css("transform", "rotate(" + parseInt($dataDeg + 180) + "deg)");	
	$this.append('<div class="circle_inbox"><span class="percent_text"></span></div>');
	$this.prop('Counter', 0).animate({Counter: $dataV},
	{
		duration: 2000, 
		easing: 'swing', 
		step: function (now) {
            $this.find(".percent_text").text(Math.ceil(now)+"%");
        }
    });
	if($dataV >= 51){
		$round.css("transform", "rotate(" + 360 + "deg)");
		setTimeout(function(){
			$this.addClass("percent_more");
		},1000);
		setTimeout(function(){
			$round.css("transform", "rotate(" + parseInt($dataDeg + 180) + "deg)");
		},1000);
	} 
});
}

AboutCounter();