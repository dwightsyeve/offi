import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Phone, MapPin } from "lucide-react";

const Contact = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-5xl font-heading font-bold mb-6 text-center tracking-tight">Get in Touch</h1>
          <p className="text-xl text-muted-foreground text-center mb-12 leading-relaxed">
            Have questions? We'd love to hear from you.
          </p>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-heading font-bold mb-6 tracking-tight">Contact Information</h2>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Email</h3>
                    <p className="text-muted-foreground">support@baileytonio.com</p>
                    <p className="text-muted-foreground">sales@baileytonio.com</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Phone</h3>
                    <p className="text-muted-foreground">+1 (555) 123-4567</p>
                    <p className="text-muted-foreground">Mon-Fri 9AM-6PM EST</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Address</h3>
                    <p className="text-muted-foreground">123 Drone Avenue</p>
                    <p className="text-muted-foreground">Tech City, TC 12345</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 bg-gradient-accent rounded-lg p-6">
                <h3 className="text-xl font-heading font-semibold text-primary-foreground mb-2">
                  Need Immediate Assistance?
                </h3>
                <p className="text-primary-foreground/90 mb-4">
                  Our team is ready to help you find the perfect drone solution.
                </p>
                <Button variant="secondary">Schedule a Call</Button>
              </div>
            </div>

            <div className="bg-card border border-border rounded-lg p-8">
              <h2 className="text-2xl font-bold mb-6">Send us a Message</h2>
              <form className="space-y-6">
                <div>
                  <Label htmlFor="name">Name</Label>
                  <Input id="name" placeholder="Your name" className="mt-2" />
                </div>

                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="your.email@example.com" className="mt-2" />
                </div>

                <div>
                  <Label htmlFor="subject">Subject</Label>
                  <Input id="subject" placeholder="How can we help?" className="mt-2" />
                </div>

                <div>
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    placeholder="Tell us more about your inquiry..."
                    className="mt-2 min-h-[150px]"
                  />
                </div>

                <Button type="submit" className="w-full">Send Message</Button>
              </form>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Contact;
