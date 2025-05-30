
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const About = () => {
  return (
    <div className="min-h-screen py-16 px-4 sm:px-6 lg:px-8 luxury-gradient">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="font-playfair text-5xl font-bold text-charcoal-800 mb-6">
            About Altyn
          </h1>
          <p className="text-2xl text-gold-700 font-medium mb-8">
            "At Altyn, we craft more than jewelry — we create moments of timeless beauty."
          </p>
        </div>

        {/* Story Section */}
        <Card className="border-gold-200/30 luxury-shadow mb-12">
          <CardContent className="p-8 velvet-texture">
            <h2 className="font-playfair text-3xl font-bold text-charcoal-800 mb-6">
              Our Story
            </h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-charcoal-600 leading-relaxed mb-6">
                Founded with a passion for exceptional craftsmanship, Altyn creates jewelry that captures 
                life's most precious moments. Each piece in our collection is meticulously handcrafted using only 
                the finest materials, from ethically sourced diamonds to lustrous pearls and precious metals.
              </p>
              <p className="text-lg text-charcoal-600 leading-relaxed mb-6">
                Our artisans bring decades of experience to every creation, ensuring that each piece not only 
                meets our exacting standards but also tells a unique story of beauty, elegance, and enduring quality.
              </p>
              <p className="text-lg text-charcoal-600 leading-relaxed">
                The name "Altyn" comes from the ancient word for gold, representing our commitment to creating 
                treasures that will be cherished for generations. We believe that jewelry should be more than 
                an accessory – it should be a celebration of life's most meaningful moments.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Services & Values Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <Card className="border-gold-200/30 luxury-shadow">
            <CardContent className="p-6 velvet-texture text-center">
              <h3 className="font-playfair text-xl font-bold text-charcoal-800 mb-4">
                Craftsmanship
              </h3>
              <p className="text-charcoal-600">
                Every piece is handcrafted with meticulous attention to detail by master artisans.
              </p>
            </CardContent>
          </Card>

          <Card className="border-gold-200/30 luxury-shadow">
            <CardContent className="p-6 velvet-texture text-center">
              <h3 className="font-playfair text-xl font-bold text-charcoal-800 mb-4">
                Quality
              </h3>
              <p className="text-charcoal-600">
                We use only the finest materials and ethically sourced gemstones in our creations.
              </p>
            </CardContent>
          </Card>

          <Card className="border-gold-200/30 luxury-shadow">
            <CardContent className="p-6 velvet-texture text-center">
              <h3 className="font-playfair text-xl font-bold text-charcoal-800 mb-4">
                Jewelry Repair
              </h3>
              <p className="text-charcoal-600">
                Expert jewelry repair services to restore your precious pieces to their original beauty.
              </p>
            </CardContent>
          </Card>

          <Card className="border-gold-200/30 luxury-shadow">
            <CardContent className="p-6 velvet-texture text-center">
              <h3 className="font-playfair text-xl font-bold text-charcoal-800 mb-4">
                Watch Services
              </h3>
              <p className="text-charcoal-600">
                Professional watch battery replacement and maintenance to keep your timepieces running perfectly.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Additional Services Section */}
        <Card className="border-gold-200/30 luxury-shadow mb-12">
          <CardContent className="p-8 velvet-texture">
            <h2 className="font-playfair text-3xl font-bold text-charcoal-800 mb-6">
              Our Services
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-playfair text-xl font-bold text-charcoal-800 mb-4">
                  Jewelry Repair & Restoration
                </h3>
                <p className="text-charcoal-600 leading-relaxed">
                  Our skilled craftsmen provide comprehensive jewelry repair services, from simple chain repairs 
                  to complex restoration projects. We handle everything from ring resizing and stone replacement 
                  to antique jewelry restoration, ensuring your treasured pieces continue to shine for years to come.
                </p>
              </div>
              <div>
                <h3 className="font-playfair text-xl font-bold text-charcoal-800 mb-4">
                  Watch Battery & Maintenance
                </h3>
                <p className="text-charcoal-600 leading-relaxed">
                  Keep your timepieces running smoothly with our professional watch services. We offer quick 
                  battery replacements, watch cleaning, and basic maintenance for most watch brands. Our 
                  experienced technicians handle your watches with the utmost care and precision.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* CTA Section */}
        <div className="text-center">
          <h2 className="font-playfair text-3xl font-bold text-charcoal-800 mb-6">
            Discover Our Collection
          </h2>
          <p className="text-lg text-charcoal-600 mb-8 max-w-2xl mx-auto">
            Explore our carefully curated selection of handcrafted jewelry, each piece designed 
            to celebrate your most precious moments.
          </p>
          <div className="space-x-4">
            <Link to="/shop">
              <Button className="gold-gradient text-white px-8 py-3 text-lg luxury-shadow">
                Shop Collection
              </Button>
            </Link>
            <Link to="/contact">
              <Button variant="outline" className="border-gold-600 text-gold-600 hover:bg-gold-50 px-8 py-3 text-lg">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
