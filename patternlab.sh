scp -r ../mark.ie/web/themes/custom/weatherlab/dist ~/htdocs/adesignforlife/mark.ie-patternlab
scp -r ../mark.ie/web/themes/custom/weatherlab/pattern-lab ~/htdocs/adesignforlife/mark.ie-patternlab
git add -A
git commit -m "Deploying PatternLab"
git push
