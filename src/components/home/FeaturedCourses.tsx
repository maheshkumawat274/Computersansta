import React from 'react';
import { Link } from 'react-router-dom';
import { Section } from '../ui/Section';
import { Button } from '../ui/Button';
import { CourseCard } from '../courses/CourseCard';
import { Course } from '../../types';

interface FeaturedCoursesProps {
  courses: Course[];
}

export function FeaturedCourses({ courses }: FeaturedCoursesProps) {
  return (
    <Section
      title="Explore Popular Courses"
      subtitle="Our Top Programs"
      center
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {courses.map((course) => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div>
      <div className="mt-16 text-center">
        <Link to="/courses">
          <Button variant="outline" size="lg">
            View All Courses
          </Button>
        </Link>
      </div>
    </Section>
  );
}
