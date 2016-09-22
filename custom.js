
const showUpgradesBtn = document.getElementById('showUpgrades'),
      allUpgrades     = document.getElementById('allUpgrades');


showUpgradesBtn.addEventListener('click', ()=>{
  allUpgrades.classList.toggle('showUpgrades');
});

