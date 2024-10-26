const continents = {
  'Africa': 'Africa',
  'Asia': 'Asia',
  'Europe': 'Europe',
  'North America': 'North America',
  'South America': 'South America',
  'Oceania': 'Oceania'
};
document.querySelectorAll('.container path').forEach(path => {
  path.addEventListener('mouseover', function(event) {
      const tooltip = document.getElementById('tooltip');
      const continentName = continents[this.id]; // Assuming each path has an ID like 'continent1'
      tooltip.textContent = continentName;
      tooltip.style.display = 'block';
  });

  path.addEventListener('mousemove', function(event) {
      const tooltip = document.getElementById('tooltip');
      tooltip.style.top = event.pageY + 10 + 'px';
      tooltip.style.left = event.pageX + 10 + 'px';
  });

  path.addEventListener('mouseout', function() {
      const tooltip = document.getElementById('tooltip');
      tooltip.style.display = 'none';
  });
});
