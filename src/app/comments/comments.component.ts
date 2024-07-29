import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Comment } from 'src/data-type'; // Make sure this path is correct


@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {
  apartmentId!: number;
  comments: Comment[] = [];
  newComment: string = '';

  constructor(private http: HttpClient, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.apartmentId = +params.get('id')!;
      this.loadComments();
    });
  }

  loadComments(): void {
    this.http.get<Comment[]>(`http://localhost:3001/comments/${this.apartmentId}`).subscribe(comments => {
      this.comments = comments;
    });
  }

  addComment(): void {
    const comment: Comment = {
      id: 0, 
      userId: 1, 
      userType: 'renter', 
      apartmentId: this.apartmentId,
      text: this.newComment,
      timestamp: new Date()
    };

    this.http.post<Comment>('http://localhost:3001/comments', comment).subscribe(() => {
      this.newComment = '';
      this.loadComments();
    });
  }
}
