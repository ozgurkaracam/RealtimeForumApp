<?php

namespace App\Events;

use Illuminate\Broadcasting\Channel;
use Illuminate\Broadcasting\InteractsWithSockets;
use Illuminate\Broadcasting\PresenceChannel;
use Illuminate\Broadcasting\PrivateChannel;
use Illuminate\Contracts\Broadcasting\ShouldBroadcast;
use Illuminate\Foundation\Events\Dispatchable;
use Illuminate\Queue\SerializesModels;

class ReplyDeleted implements ShouldBroadcast
{
    use Dispatchable, InteractsWithSockets, SerializesModels;
    public $reply;
    public $question;
    /**
     * Create a new event instance.
     *
     * @return void
     */
    public function __construct($reply,$question)
    {
        $this->reply=$reply;
        $this->question=$question;
    }

    /**
     * Get the channels the event should broadcast on.
     *
     * @return \Illuminate\Broadcasting\Channel|array
     */
    public function broadcastOn()
    {
        return ['delete-reply-channel-'.$this->question];
    }

    public function broadcastAs()
    {
        return 'delete-reply-event-'.$this->question;
    }
}
