#### Workflow (for now since landing page is not yet available): 
1. `git fetch`
2. `git checkout development` - Branch out from `development` branch
3. Create your own branch
4. If done creating `feature` or `fix`, **Pull Request** is automatically set to `development` branch

#### Workflow (if landing page is now released):
1. `git fetch`
2. `git checkout master` - Branch out from `master` branch
3. Create your own branch
4. If done creating `feature` or `fix`, **Pull Request** is still automatically set to `development` branch to avoid putting bugs or errors in `master` branch
5. If no error to `development` branch, **Pull Request** will be made to `master` branch
6. Check again if there are no errors and repeat