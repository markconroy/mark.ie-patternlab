scp -r ../mark.ie/web/themes/custom/patternlab/dest ~/htdocs/adesignforlife/mark.ie-patternlab
scp -r ../mark.ie/web/themes/custom/patternlab/pattern-lab ~/htdocs/adesignforlife/mark.ie-patternlab
git add -A
git commit -m "Deploying PatternLab"
git push