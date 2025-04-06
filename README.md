# MLearnJS
JavaScript Machine Learning ES6 Module

## CDN Usage

https://cdn.jsdelivr.net/gh/luisespino/mlearnjs@main/mlearn.mjs

### Example
```
async function fit_predict() {
    // Dynamically import the DecisionTreeClassifier module
    const MLearnJS = 'https://cdn.jsdelivr.net/gh/luisespino/mlearnjs@main/mlearn.mjs'
    const { DecisionTreeClassifier } = await import(MLearnJS);
    
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

fit_predict();
```

## MLearnJS is continuously being developed

JSDelivr changes may be slow. To use the latest version of the model, use:

```
    const MLearnJS = 'https://luisespino.github.io/mlearnjs/mlearn.mjs'
    const { DecisionTreeClassifier} = await import(MLearnJS);

```

## Available Exported Classes and Methods

| **#** | **Class/Method**          | **Location (File)**        | **Description**                                                  |
|-------|---------------------------|----------------------------|------------------------------------------------------------------|
| 1     | `LinearRegression`         | `/linear-model.mjs`        | Class for performing linear regression.                          |
| 2     | `PolynomialRegression`     | `/linear-model.mjs`        | Class for performing polynomial regression.                      |
| 3     | `GaussianNB`               | `/naive-bayes.mjs`         | Class implementing the Naive Bayes classifier for Gaussian data. |
| 4     | `DecisionTreeClassifier`   | `/tree.mjs`                | Class for building and using decision trees.                     |
| 5     | `LabelEncoder`             | `/preprocessing.mjs`       | Class for encoding labels into numeric form.                     |
| 6     | `trainTestSplit`           | `/model-selection.mjs`     | Function for splitting datasets into training and testing sets.  |
| 7     | `joinArrays`               | `/model-selection.mjs`     | Function for joining two or more arrays.                         |
| 8     | `zip`                      | `/model-selection.mjs`     | Function for zipping two or more arrays element-wise.            |
| 9     | `accuracyScore`            | `/metrics.mjs`             | Function to calculate the accuracy score of a model.             |
