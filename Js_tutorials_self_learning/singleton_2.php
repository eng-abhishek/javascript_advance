<?php
class Singleton
{
    private static $instance;

    private function __construct()
    {
        // Private constructor to prevent instantiation outside the class
    }

    public static function getInstance()
    {
        if (!isset(self::$instance)) {
            self::$instance = new self;
        }

        return self::$instance;
    }

    public function doSomething()
    {
        // Method that performs some action
    }
}
?>