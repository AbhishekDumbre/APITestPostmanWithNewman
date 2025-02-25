var newman=require('newman');
newman.run({
  collection:'test.json',
  environment:'test_env.json',
  reporters:'myreporter',
  reporter:{
    html:{
      export:'./result.html'
    }
  }
})