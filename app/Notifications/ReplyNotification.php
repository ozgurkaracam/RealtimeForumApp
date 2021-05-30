<?php

namespace App\Notifications;

use App\Http\Resources\ReplyResource;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Notifications\Messages\BroadcastMessage;
use Illuminate\Notifications\Messages\MailMessage;
use Illuminate\Notifications\Notification;

class ReplyNotification extends Notification
{
    use Queueable;

    /**
     * Create a new notification instance.
     *
     * @return void
     */
    public function __construct($reply)
    {
        $this->reply=$reply;
    }

    /**
     * Get the notification's delivery channels.
     *
     * @param  mixed  $notifiable
     * @return array
     */
    public function via($notifiable)
    {
        return ['database'];
    }

    /**
     * Get the mail representation of the notification.
     *
     * @param  mixed  $notifiable
     * @return \Illuminate\Notifications\Messages\MailMessage
     */
    public function toMail($notifiable)
    {
        return (new MailMessage)
                    ->line('The introduction to the notification.')
                    ->action('Notification Action', url('/'))
                    ->line('Thank you for using our application!');
    }

    /**
     * Get the array representation of the notification.
     *
     * @param  mixed  $notifiable
     * @return array
     */
    public function toArray($notifiable)
    {
        return [
            'reply_id'=>$this->reply->id,
            'question_id'=>$this->reply->question->id,
            'user_id'=>$this->reply->user->id,
            'user'=>$this->reply->user->name,
            'question_slug'=>$this->reply->question->slug,
            'reply'=>$this->reply->body,
            'created_at'=>$this->reply->created_at,
            'question'=>$this->reply->question->title
//                'reply'=>new ReplyResource($this->reply)
        ];
    }

    public function toBroadcast($notifiable)
    {
        return new BroadcastMessage([
            'reply_id'=>$this->reply->id,
            'question_id'=>$this->reply->question->id,
            'user_id'=>$this->reply->user->id,
            'user'=>$this->reply->user->name,
            'question_slug'=>$this->reply->question->slug,
            'reply'=>$this->reply->body,
            'created_at'=>$this->reply->created_at->diffForHumans(),
            'question'=>$this->reply->question->title
        ]);
    }

    public function broadcastType()
    {
        return 'broadcast.message';
    }
}
