export const LinearRegression = async () => {
    const { LinearRegression } = await import('/linear-model.mjs');
    return LinearRegression;
};

export const PolynomialRegression = async () => {
    const { PolynomialRegression } = await import('/linear-model.mjs');
    return PolynomialRegression;
};

export const GaussianNB = async () => {
    const { GaussianNB } = await import('/naive-bayes.mjs');
    return GaussianNB;
};

export const DecisionTreeClassifier = async () => {
    const { DecisionTreeClassifier } = await import('/tree.mjs');
    return DecisionTreeClassifier;
};

export const LabelEncoder = async () => {
    const { LabelEncoder } = await import('/preprocessing.mjs');
    return LabelEncoder;
};

export const trainTestSplit = async () => {
    const { trainTestSplit } = await import('/model-selection.mjs');
    return trainTestSplit;
};

export const joinArrays = async () => {
    const { joinArrays } = await import('/model-selection.mjs');
    return joinArrays;
};

export const zip = async () => {
    const { zip } = await import('/model-selection.mjs');
    return zip;
};

export const accuracyScore = async () => {
    const { accuracyScore } = await import('/metrics.mjs');
    return accuracyScore;
};
