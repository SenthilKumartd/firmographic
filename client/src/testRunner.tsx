import { validateFeatures } from './components/FeatureShowcaseTest';

// Run the validation function and output the results
const validationResults = validateFeatures();

console.log('\n=== FEATURE SHOWCASE TEST RESULTS ===');
console.log(validationResults.message);
console.log(`Total features found: ${validationResults.featureCount}`);
console.log('==================================\n');

// Exit with the appropriate code based on validation result
if (validationResults.isValid) {
  console.log('All tests passed!');
  process.exit(0);
} else {
  console.error('Tests failed!');
  process.exit(1);
}