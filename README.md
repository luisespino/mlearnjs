# MLearnJS
JavaScript Machine Learning ES6 Module

## CDN Usage

https://cdn.jsdelivr.net/gh/mlearnjs/mlearnjs.github.io@latest/dist/mlearn.mjs

### Example
```
async function fit_predict() {
    // Dynamically import the DecisionTreeClassifier module
    const { DecisionTreeClassifier } = await import('https://cdn.jsdelivr.net/gh/mlearnjs/mlearnjs.github.io@main/dist/mlearn.mjs');
    
    // Create an instance of the DecisionTreeClassifier
    const myDecisionTree = await DecisionTreeClassifier(); 
    const model = new myDecisionTree();

    // Train the model using feature matrix (features) and label array (label)
    model.fit(features, label);

    // Make predictions using the trained model with the feature matrix
    const yPredict = model.predict(features);
  
    // Optionally, you can return or log the predictions
    console.log(yPredict);
}
```

## MLearnJS is continuously being developed

JSDelivr changes may be slow. To use the latest version of the model, use:

```
    const { DecisionTreeClassifier} = await import('https://mlearnjs.github.io/dist/mlearn.mjs');

```
