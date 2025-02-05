const Authors = ['Meryn Babu','Varsha VP','Sravya Reddy','Nivedita Nalabolu','Hitanshi Umesh Deo'];
const IssueDescriptions = ['Minor','Major','Urgent','Critical'];
const RevisionDescriptions = ['Repair','Replace','Discard','Change'];
const PartStatuses = ['ok','good','bad'];
const Suppliers = ['Foo Inc.','Bar Ltd.','Baz GmbH.'];

function validateAuthor(value) {
    return Authors.includes(value);
}

function validatePartStatus(value) {
    return PartStatuses.includes(value);
}

function validateIssueDescription(value) {
    return IssueDescriptions.includes(value);
}

function validateRevisionDescription(value) {
    return RevisionDescriptions.includes(value);
}

function validateSupplier(value) {
    return Suppliers.includes(value);
}

module.exports = {
    validateAuthor,
    validatePartStatus,
    validateIssueDescription,
    validateRevisionDescription,
    validateSupplier
};
