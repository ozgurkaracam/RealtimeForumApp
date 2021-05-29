<?php

namespace App\Events;

use Illuminate\Broadcasting\Channel;
use Illuminate\Broadcasting\InteractsWithSockets;
use Illuminate\Broadcasting\PresenceChannel;
use Illuminate\Broadcasting\PrivateChannel;
use Illuminate\Contracts\Broadcasting\ShouldBroadcast;
use Illuminate\Foundation\Events\Dispatchable;
use Illuminate\Queue\SerializesModels;

class LikeEvent implements ShouldBroadcast
{
    use Dispatchable, InteractsWithSockets, SerializesModels;
    public $like;
    public $type;
    /**
     * Create a new event instance.
     *
     * @return void
     */
    public function __construct($like,$type)
    {
        $this->like=$like;
        $this->type=$type;
    }

    /**
     * Get the channels the event should broadcast on.
     *
     * @return \Illuminate\Broadcasting\Channel|array
     */
    public function broadcastOn()
    {
        if($this->type=='question')
            return ['question-channel-like-'.$this->like->id];
        else
            return ['reply-channel-like-'.$this->like->id];
    }

    public function broadcastAs()
    {
        if($this->type=='question')
            return 'question-like-event-'.$this->like->id;
        else
            return 'reply-like-event-'.$this->like->id;
    }
}
