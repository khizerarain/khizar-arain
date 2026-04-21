# Code Review Guidelines

## What to Look for in Reviews

- ✅ Code follows project style guidelines
- ✅ Changes are properly tested
- ✅ No unnecessary code duplication
- ✅ Comments explain the "why", not the "what"
- ✅ TypeScript types are properly defined
- ✅ Performance considerations are addressed
- ✅ Accessibility guidelines are followed
- ✅ Changes don't break existing functionality

## Review Checklist

- [ ] Code is readable and well-structured
- [ ] No console errors or warnings
- [ ] Types are properly defined (TypeScript)
- [ ] Comments are clear and helpful
- [ ] No hardcoded values
- [ ] Follows naming conventions
- [ ] Performance is acceptable
- [ ] Tests pass (if applicable)

## Common Issues

1. **Missing Types**: Always define prop types and return types
2. **Magic Numbers**: Extract to constants with descriptive names
3. **Console Logs**: Remove debug logs before merging
4. **Unused Imports**: Clean up unused imports
5. **TODOs**: Complete or create issues instead

## Approval Process

- Minimum 1 approval required
- All conversations must be resolved
- CI/CD checks must pass
- No merge conflicts
