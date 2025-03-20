// Feature Product //

export const FeatureProduct = [
  {
    id: 1,
    title: 'UI/UX Designer',
    location: 'Seattle, USA (Remote)',
    postedTime: '1 day ago',
    applicants: 22,
    category: 'Graphic Designer',
  },
  {
    id: 2,
    title: 'Frontend Developer',
    location: 'New York, USA',
    postedTime: '2 days ago',
    applicants: 15,
    category: 'Frontend',
  },
  {
    id: 3,
    title: 'Backend Developer',
    location: 'San Francisco, USA',
    postedTime: '3 days ago',
    applicants: 10,
    category: 'Backend',
  },
  {
    id: 4,
    title: 'Frontend Manager',
    location: 'Los Angeles, USA (Remote)',
    postedTime: '5 days ago',
    applicants: 30,
    category: 'Frontend',
  },
  {
    id: 5,
    title: 'Backend Developer',
    location: 'San Francisco, USA',
    postedTime: '3 days ago',
    applicants: 10,
    category: 'Backend',
  },
];
// filter the  feature product based on selected category
export const ProductFeature = (selectedCategory) => {
  return selectedCategory === 'All'
    ? FeatureProduct
    : FeatureProduct.filter((job) => job.category === selectedCategory);
};
// Recommanded Product //

export const RecommendedProduct = [
  {
    id: 1,
    title: 'UI/UX Designer',
    location: 'Seattle, USA (Remote)',
    postedTime: '1 day ago',
    applicants: 22,
    category: 'Graphic Designer',
  },
  {
    id: 2,
    title: 'Frontend Developer',
    location: 'New York, USA',
    postedTime: '2 days ago',
    applicants: 15,
    category: 'Frontend',
  },
  {
    id: 3,
    title: 'Backend Developer',
    location: 'San Francisco, USA',
    postedTime: '3 days ago',
    applicants: 10,
    category: 'Backend',
  },
  {
    id: 4,
    title: 'Backend Developer',
    location: 'Los Angeles, USA (Remote)',
    postedTime: '5 days ago',
    applicants: 30,
    category: 'Backend',
  },
  {
    id: 5,
    title: 'Backend Developer',
    location: 'San Francisco, USA',
    postedTime: '3 days ago',
    applicants: 10,
    category: 'Backend',
  },
];
// filter the  Recommanded product based on selected category
export const ProductRecommanded = (selectedCategory) => {
  return selectedCategory === 'All'
    ? RecommendedProduct
    : RecommendedProduct.filter((job) => job.category === selectedCategory);
};
