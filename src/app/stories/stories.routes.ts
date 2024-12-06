import type { Routes } from '@angular/router';
import { StoriesComponent } from './stories.component';
import { StoryDetailComponent } from './story-detail/story-detail.component';

export const STORIES_ROUTES: Routes = [
  {
    path: '',
    component: StoriesComponent,
    title: 'stories',
  },
  { path: ':id', component: StoryDetailComponent },
];
