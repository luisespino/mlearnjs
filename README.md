# MLearnJS
JavaScript Machine Learning ES6 Module

## CDN Usage

https://cdn.jsdelivr.net/gh/luisespino/mlearnjs@main/mlearn.mjs

### Example

It is using dynamic import with import(), async, and await for efficiency, to load only the necessary code depending on the machine learning model to be used.

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
| 5     | `MLPClassifier`   | `/neural-network.mjs`                | Class implementing the MLP classifier.                     |
| 6     | `LabelEncoder`             | `/preprocessing.mjs`       | Class for encoding labels into numeric form.                     |
| 7     | `trainTestSplit`           | `/model-selection.mjs`     | Function for splitting datasets into training and testing sets.  |
| 8     | `joinArrays`               | `/model-selection.mjs`     | Function for joining two or more arrays.                         |
| 9     | `zip`                      | `/model-selection.mjs`     | Function for zipping two or more arrays element-wise.            |
| 10    | `accuracyScore`            | `/metrics.mjs`             | Function to calculate the accuracy score of a model.             |

## Examples

[Linear Regression](https://luisespino.github.io/artificial-intelligence/javascript/08-linear-regression.html)

[Polynomial Regression](https://luisespino.github.io/artificial-intelligence/javascript/09-polynomial-regression.html)

[Gaussian Naive Bayes](https://luisespino.github.io/artificial-intelligence/javascript/10-gaussian-nb.html)

[Decision Tree](https://luisespino.github.io/artificial-intelligence/javascript/11-decision-tree.html)

[MLP Classifier Logic Gates ](https://luisespino.github.io/artificial-intelligence/javascript/12-mlp-classifier.html)

[MLP Classifier](https://luisespino.github.io/artificial-intelligence/javascript/13-mlp-classifier.html)

[KMeans Cluster Classifier](https://luisespino.github.io/artificial-intelligence/javascript/14-kmeans-classifier.html)

[KNearest Neighbors Classifier](https://luisespino.github.io/artificial-intelligence/javascript/15-neighbors-classifier.html)