import { Button } from "@/components/ui/button";
import {ConversationHero} from "./ConversationHero.tsx";

function Hello() {
  return (
    <section className="h-[70vh] bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/10" />
      
      {/* Floating shapes */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-primary/10 rounded-full animate-float" />
      <div className="absolute top-40 right-20 w-16 h-16 bg-accent/20 rounded-full animate-float" style={{ animationDelay: '1s' }} />
      <div className="absolute bottom-40 left-20 w-12 h-12 bg-primary/5 rounded-full animate-float" style={{ animationDelay: '2s' }} />
      
      <div className="container mx-auto px-6 py-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[70vh]">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                <span className="text-foreground">India's</span>{" "}
                <span className="bg-blue-400 bg-clip-text text-transparent">
                  First IIT 
                </span>
                <br />
                <span className=" bg-red-400 bg-clip-text text-transparent">
                  JEE
                </span>
                <br />
                <span className="text-foreground">Market Place</span>
              </h1>
              
              <p className="text-xl text-muted-foreground max-w-lg leading-relaxed">
                Unlock your potential by signing up with SharmaJEE - 
                The most affordable learning solution
              </p>
            </div>
            
            {/* <Button  size="lg" className="group">
              Get Started
              <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" 
                   fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                      d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Button> */}
          </div>
          
          {/* Right Content - Your Conversation Component */}
          <div className="relative flex justify-center items-center">
            <ConversationHero />
          </div>
        </div>
      </div>
    </section>
  );
};
export default Hello;